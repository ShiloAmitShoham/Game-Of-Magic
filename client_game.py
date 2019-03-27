import pygame
from math import sin, cos, pi
from math import atan2, pi
import math
from Charachters import Medusa, Minotaur, Wizard, Skeleton
from Castle import Castle
import socket
import select
import sys
import random


def quit_pressed():
    finish = False
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            finish = True
    return finish


def build_screen(window_width, window_height):
    # Init screen
    pygame.init()
    size = (window_width, window_height)
    screen = pygame.display.set_mode(size)
    pygame.display.set_caption("Games Of Magic")
    return screen


def build_areana(screen):
    image = 'skillz/frozen copy.jpeg'
    img = pygame.image.load(image)
    screen.blit(img, (0, 0))
    pygame.display.flip()


def show_creachers(creachers):
    for creacher in creachers:
        if creacher.health == 0:
            creachers.remove(creacher)
        elif creacher.attacked:
            creacher.show_attack()
        else:
            creacher.show_walk()


def show_castles(castles):
    for castle in castles:
        if castle.health == 0:
            castles.remove(castle)
        else:
            castle.show()
    return True


def run_creachers(my_list, enemy_enemy, castle):
    my_creachers_to_run = my_list[:]
    for my_creacher in my_creachers_to_run:
        my_creacher.attacked = False
        if my_creacher.type != 'Minotaur':
            closest_enemy_creacher = closest_object_to_object(my_creacher, enemy_enemy)
            if closest_enemy_creacher:
                if my_creacher.distance(closest_enemy_creacher) <= 150:
                    my_creacher.attack(closest_enemy_creacher)
                    my_creacher.attacked = True
        if not my_creacher.attacked:
            if my_creacher.distance(castle) <= 300:
                my_creacher.attack(castle)
                my_creacher.attacked = True
            else:
                my_creacher.move_to(castle)
    return my_creachers_to_run


def closest_object_to_object(obj, list_to_find):
    if len(list_to_find) > 0:
        minimum = obj.distance(list_to_find[0])
        ret = list_to_find[0]
        for object_min in list_to_find:
            if obj.distance(object_min) < minimum:
                minimum = obj.distance(object_min)
                ret = object_min
        return ret

def show_mana(mana, screen):
    if mana > 0:
        pygame.draw.rect(screen, (0,175,255), (75, 18, mana * 15, 20))

def characters_names_list():
    characters_names = ['Medusa', 'Wizard', 'Minotaur', 'Skeleton']
    list_ch = []
    while len(list_ch) < 4:
        obj = characters_names[random.randint(0, len(characters_names) - 1)]
        list_ch.append(obj)
        characters_names.remove(obj)
    return list_ch

def mouse():
    for event in pygame.event.get():
        if event.type == pygame.MOUSEBUTTONDOWN:
            return pygame.mouse.get_pos()
    return (False, False)

def show_toolbar(characters_names, screen):
    dict_names = {'Medusa': 'Fantasy Free Game Kit/Characters/Monster - Medusa/Spriter Files/Assets/Head/Head.png', 'Wizard': 'Fantasy Free Game Kit/Characters/Hero - Wizard/Spriter File/Head/Head.png', 'Minotaur': 'Fantasy Free Game Kit/Characters/Monster - Minotaur/Spriter File/Assets/Head/Head.png', 'Skeleton': 'Fantasy Free Game Kit/Characters/Monster - Skeleton/Spriter File/Assets/Head/Head.png'}
    img = pygame.image.load(dict_names[characters_names[0]])
    if characters_names[0] is 'Wizard' or characters_names[0] is 'Minotaur':
        screen.blit(img, (150, 50))
        pygame.display.flip()
    else:
        screen.blit(img, (160, 45))
        pygame.display.flip()
    img = pygame.image.load(dict_names[characters_names[1]])
    if characters_names[0] == 'Wizard' or characters_names[0] == 'Minotaur':
        screen.blit(img, (40, 50))
        pygame.display.flip()
    else:
        screen.blit(img, (56, 45))
        pygame.display.flip()

def in_toolbar(x, y):
    if x >= 150 and y >= 50 and x <= 250 and y <= 143:
        return 'Right'
    if x >= 40 and y >= 50 and x <= 140 and y <= 143:
        return 'Left'
    else:
        return False

def handel_charachter_to_append(mouse_x, mouse_y, characters_names, character_to_append, client_socket, mana, my_side):
    dict_names_cost = {'Medusa': 6, 'Wizard': 4, 'Minotaur': 5, 'Skeleton': 4}
    if mouse_x:
        if character_to_append is not '':
            if in_toolbar(mouse_x, mouse_y):
                if in_toolbar(mouse_x, mouse_y) is 'Right':
                    return characters_names[0], mana
                else:
                    return characters_names[1], mana
            elif mana >= dict_names_cost[character_to_append]:
                client_socket.send(character_to_append + ':' + str(mouse_x) + ':' + str(mouse_y) + ':' + my_side)
                characters_names.remove(character_to_append)
                characters_names.append(character_to_append)
                return '', mana - dict_names_cost[character_to_append]
            else:
                return character_to_append, mana
        elif in_toolbar(mouse_x, mouse_y):
            if in_toolbar(mouse_x, mouse_y) is 'Right':
                return characters_names[0], mana
            else:
                return characters_names[1], mana
        else:
            return character_to_append, mana
    else:
        return character_to_append, mana

def return_character_by_string(data, screen, my_side):
    list_data = data.split(':')
    character_side = {'left': 'right', 'right': 'left'}
    if list_data[0] == 'Medusa':
        return Medusa(int(list_data[1]), int(list_data[2]), character_side[list_data[3]], screen)
    elif list_data[0] == 'Wizard':
        return Wizard(int(list_data[1]), int(list_data[2]), character_side[list_data[3]], screen)
    elif list_data[0] == 'Minotaur':
        return Minotaur(int(list_data[1]), int(list_data[2]), character_side[list_data[3]], screen)
    elif list_data[0] == 'Skeleton':
        return Skeleton(int(list_data[1]), int(list_data[2]), character_side[list_data[3]], screen)

def update_mana(mana, turn):
    if turn % 15 == 0 and mana < 10:
        return mana + 1
    else:
        return mana

def play_second_music():
    pygame.mixer.music.load('opening_music.mp3')
    pygame.mixer.music.play(-1, 2)

def after_battle_screen(my_castle):
    dict_after_battle = {'loser': 'screens/loser.png', 'winner': 'screens/winner.png'}
    run = True
    screen = build_screen(1440, 759)
    play_second_music()
    if my_castle.health == 0:
        img = pygame.image.load(dict_after_battle['loser'])
        screen.blit(img, (0, 0))
        pygame.display.flip()
    else:
        img = pygame.image.load(dict_after_battle['winner'])
        screen.blit(img, (0, 0))
        pygame.display.flip()
    while run:
        run = not quit_pressed()
            
def main():
    client_socket = sys.argv[0]
    my_side = sys.argv[1]
    print [my_side]
    open_client_sockets = [client_socket]
    messages_to_send = []
    screen = build_screen(1440, 819)
    turn = 0
    run = True
    my_creachers = []
    reverse_side = {'left': 'right', 'right': 'left'}
    enemy_creachers = [Wizard(1000, 30, my_side, screen)]
    if my_side is 'left':
        my_castle = Castle(-150, 580, 'left', screen, 21)
        enemy_castle =  Castle(1300, 50, 'right', screen, 24)
    else:
        my_castle =  Castle(1300, 50, 'right', screen, 24)
        enemy_castle = Castle(-150, 580, 'left', screen, 21)
    castle_for_good_graphics = Castle(1300, -1000000, 'right', screen, 24)
    characters_names = characters_names_list()
    character_to_append = ''
    mana = 0
    while run:
        turn += 1
        ready = select.select([client_socket], [], [], 0.000000000000000000000000000000000000000000000000000000000000000001)
        if ready[0]:
            data = client_socket.recv(1024)
            my_creachers.append(return_character_by_string(data, screen, my_side))
        mana = update_mana(mana, turn)
        build_areana(screen)
        show_mana(mana, screen)
        my_castle.show()
        enemy_castle.show()
        show_toolbar(characters_names, screen)
        show_creachers(my_creachers)
        show_creachers(enemy_creachers)
        castle_for_good_graphics.show()
        my_creachers_new = run_creachers(my_creachers, enemy_creachers, enemy_castle)
        enemy_creachers_new = run_creachers(enemy_creachers, my_creachers, my_castle)
        my_creachers = my_creachers_new
        enemy_creachers = enemy_creachers_new
        mouse_x, mouse_y = mouse()
        character_to_append, mana = handel_charachter_to_append(mouse_x, mouse_y, characters_names, character_to_append, client_socket, mana, my_side)
        run = run and not quit_pressed() and my_castle.health is not 0 and enemy_castle.health is not 0
    after_battle_screen(my_castle)
if __name__ == "__main__":
    main()
