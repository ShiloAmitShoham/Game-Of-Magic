import pygame
from math import sin, cos, pi
from math import atan2, pi
import math
import os
from Charachters import Medusa, Minotaur, Wizard, Skeleton
from Castle import Castle
from client_game import *

def opening_screen():
    pic = 'screens/opening.png'
    screen = build_screen(1440, 759)
    run = True
    while run:
        run = not quit()
        screen.blit(pygame.image.load(pic), (0, 0))
        pygame.display.flip()
        (mouse_x, mouse_y) = mouse()
        if mouse_x is not False:
            if (mouse_x >= 500) and (mouse_y >= 439) and (mouse_x <= 574) and (mouse_y <= 513):
                instructions_screen()
                run = False
            elif (mouse_x >= 850) and (mouse_y >= 432) and (mouse_x <= 927) and (mouse_y <= 513):
                story_screen()
                run = False
            elif (mouse_x >= 628) and (mouse_y >= 431) and (mouse_x <= 806) and (mouse_y <= 513):
                run = False
            elif (mouse_x >= 26) and (mouse_y >= 32) and (mouse_x <= 72) and (mouse_y <= 82):
                music()


def story_screen():
    pic = 'screens/game_stroy.png'
    screen = build_screen(1440, 759)
    run = True
    while run:
        screen.blit(pygame.image.load(pic), (0, 0))
        pygame.display.flip()
        (mouse_x, mouse_y) = mouse()
        if mouse_x is not False:
            if (mouse_x >= 474) and (mouse_y >= 580) and (mouse_x <= 552) and (mouse_y <= 662):
                instructions_screen()
                run = False
            elif (mouse_x >= 872) and (mouse_y >= 584) and (mouse_x <= 948) and (mouse_y <= 661):
                opening_screen()
                run = False
            elif (mouse_x >= 623) and (mouse_y >= 602) and (mouse_x <= 802) and (mouse_y <= 681):
                run = False
            elif (mouse_x >= 26) and (mouse_y >= 32) and (mouse_x <= 72) and (mouse_y <= 82):
                music()


def instructions_screen():
    pic = 'screens/instructions.png'
    screen = build_screen(1440, 759)
    run = True
    while run:
        run = not quit()
        screen.blit(pygame.image.load(pic), (0, 0))
        pygame.display.flip()
        (mouse_x, mouse_y) = mouse()
        if mouse_x is not False:
            if (mouse_x >= 489) and (mouse_y >= 580) and (mouse_x <= 563) and (mouse_y <= 658):
                story_screen()
                run = False
            elif (mouse_x >= 875) and (mouse_y >= 583) and (mouse_x <= 947) and (mouse_y <= 656):
                opening_screen()
                run = False
            elif (mouse_x >= 626) and (mouse_y >= 601) and (mouse_x <= 802) and (mouse_y <= 681):
                run = False
            elif (mouse_x >= 27) and (mouse_y >= 36) and (mouse_x <= 73) and (mouse_y <= 81):
                music()


def build_screen(window_width, window_height):
    # Init screen
    pygame.init()
    size = (window_width, window_height)
    screen = pygame.display.set_mode(size)
    pygame.display.set_caption("Games Of Magic")
    return screen


def mouse():
    for event in pygame.event.get():
        if event.type == pygame.MOUSEBUTTONDOWN:
            return pygame.mouse.get_pos()
    return (False, False)


def quit():
    finish = False
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            finish = True
    return finish


def music():
    if pygame.mixer.music.get_busy() == 1:
        pygame.mixer.music.stop()
    else:
        pygame.mixer.music.play(-1, 2)


def play_intro():
    pygame.mixer.music.load('opening_music.mp3')
    pygame.mixer.music.play(-1, 2)

def music_battle():
    pygame.mixer.music.load('music1.mp3')
    pygame.mixer.music.play(-1, 2)


def main():
    client_socket = socket.socket()
    client_socket.connect(('127.0.0.1', 8080))	
    client_socket.setblocking(0)
    build_screen(1440, 759)
    play_intro()
    opening_screen()
    print 'play'
    music_battle()
    sys.argv = [client_socket, 'left']
    execfile("client_game.py")


if __name__ == "__main__":
    main()
