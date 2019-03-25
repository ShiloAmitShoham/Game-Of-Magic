import pygame
from math import sin, cos, pi
from math import atan2, pi
import math
from base_character import Character


class Medusa(Character):

    def __init__(self, x, y, side, screen):
        super(Medusa, self).__init__('Medusa', x, y, 243, 197, 270, 187, 80, 1.5, 6, 3.5,
                                     'Fantasy Free Game Kit/Characters/Monster - Medusa/PNG/FW_Meduza_Running__',
                                     'Fantasy Free Game Kit/Characters/Monster - Medusa/PNG/FW_Meduza_Attack__',
                                     side, 23, 23, screen)


class Wizard(Character):

    def __init__(self, x, y, side, screen):
        super(Wizard, self).__init__('Wizard', x, y, 148, 196, 180, 207, 70, 1.8, 4, 2.5,
                                     'Fantasy Free Game Kit/Characters/Hero - Wizard/PNG/FW_Hero_1_Walking__',
                                     'Fantasy Free Game Kit/Characters/Hero - Wizard/PNG/FW_Hero_1_Attack__',
                                     side, 23, 8, screen)


class Minotaur(Character):

    def __init__(self, x, y, side, screen):
        super(Minotaur, self).__init__('Minotaur', x, y, 300, 234, 420, 505, 100, 2.0, 5, 1.5,
                                       'Fantasy Free Game Kit/Characters/Monster - Minotaur/PNG/FW_Minotaur_Walking__',
                                       'Fantasy Free Game Kit/Characters/Monster - Minotaur/PNG/FW_Minotaur_Attacking__',
                                       side, 35, 9, screen)


class Skeleton(Character):

    def __init__(self, x, y, side, screen):
        super(Skeleton, self).__init__('Skeleton', x, y, 146, 206, 193, 235, 50, 1.0, 2, 4,
                                       'Fantasy Free Game Kit/Characters/Monster - Skeleton/PNG/FW_Skeleton_Walking__',
                                       'Fantasy Free Game Kit/Characters/Monster - Skeleton/PNG/FW_Skeleton_Attack__',
                                       side, 23, 19, screen)
