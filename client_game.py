import pygame
from math import sin, cos, pi
from math import atan2, pi
import math
from Charachters import Medusa, Minotaur, Wizard, Skeleton
from Castle import Castle


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


def show_creachers(creachers, castles):
    for creacher in creachers:
        if creacher.attack:
            creacher.show_attack()
        else:
            creacher.move_to(castles[0])
            creacher.show_walk()


def show_castles(castles):
    for castle in castles:
        if castle.health == 0:
            castles.remove(castle)
        else:
            castle.show()
    return True


def run_creachers(my_creachers, enemy_creachers, enemy_castle):
    my_creachers_to_run = my_creachers[:]
    for my_creacher in my_creachers_to_run:
        my_creacher.attack = False
        closest_enemy_creacher = closest_object_to_object(my_creacher, enemy_creachers)
        if closest_enemy_creacher:
            if my_creacher.distance(closest_enemy_creacher) <= 150:
                my_creacher.attack(closest_enemy_creacher)
                my_creacher.attacked = True
        if not my_creacher.attacked:
            print my_creacher.attack
            if my_creacher.distance(enemy_castle) <= 150:
                my_creacher.attack(enemy_castle)
                my_creacher.attacked = True
            else:
                my_creacher.move_to(enemy_castle)
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


def music():
    pygame.mixer.music.load('music1.mp3')
    pygame.mixer.music.play(-1, 2)


screen = build_screen(1440, 819)
music()
turn = 0
run = True
my_creachers = [Medusa(1000, 500, 'right', screen)]
enemy_creachers = []
castles = [Castle(1300, 50, 'right', screen, 24), Castle(-150, 580, 'left', screen, 21),
           Castle(-150, 580, 'left', screen, 21)]
enemy_my_creachers = []
while run:
    turn += 1
    build_areana(screen)
    run = show_castles(castles)
    show_creachers(my_creachers, castles)
    my_creachers_new = run_creachers(my_creachers, enemy_creachers, castles[0])
    enemy_creachers_new = run_creachers(enemy_creachers, my_creachers, castles[1])
    my_creachers = my_creachers_new[:]
    enemy_creachers = enemy_creachers_new[:]
    run = run and not quit_pressed()
