import pygame
from math import sin, cos, pi
from math import atan2, pi
import math


class Character(object):

    def __init__(self, type_charachter, x, y, width, height, width_attack, height_attack, start_health, power, cost,
                 step, walk_img, attack_img,
                 side, limit_walking, limit_attacking, screen):
        self.type = type_charachter
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.width_attack = width_attack
        self.height_attack = height_attack
        self.start_health = start_health
        self.health = start_health
        self.hitbox_health = float(100) / float(start_health)
        self.hitbox = (self.x + self.width/3, self.y + 11, 29, 52)
        self.power = power
        self.cost = cost
        self.step = step
        self.index_walking = 0
        self.index_attacking = 0
        self.limit_walking = limit_walking
        self.limit_attacking = limit_attacking
        self.walk_img = walk_img
        self.attack_img = attack_img
        self.side = side
        self.dic_side_boolean = {'left': True, 'right': False}
        self.screen = screen
        self.center_x, self.center_y = get_center_point(self.x, self.y, self.width, self.height)
        self.attacked = False

    def show_walk(self):
        string_index, self.index_walking = get_index_string(self.index_walking, self.limit_walking)
        img_name = pygame.image.load(self.walk_img + string_index + '.png')
        img = pygame.transform.scale(img_name, (self.width, self.height))
        self.screen.blit(pygame.transform.flip(img, self.dic_side_boolean[self.side], False), (self.x, self.y))
        pygame.display.flip()
        pygame.time.delay(5)
        pygame.draw.rect(self.screen, (255, 0, 0), (self.hitbox[0], self.hitbox[1] - 20, 50, 10))
        pygame.draw.rect(self.screen, (0, 128, 0), (
            self.hitbox[0], self.hitbox[1] - 20, 50 - (5 * (10 - (self.hitbox_health * self.health) / 10)), 10))
        self.hitbox = (self.x + self.width/3, self.y + 2, 31, 57)

    def show_attack(self):
        string_index, self.index_attacking = get_index_string(self.index_attacking, self.limit_attacking)
        img_name = pygame.image.load(self.attack_img + string_index + '.png')
        img = pygame.transform.scale(img_name, (self.width_attack, self.height_attack))
        if self.type == 'Minotaur':
            self.screen.blit(pygame.transform.flip(img, self.dic_side_boolean[self.side], False), (self.x, self.y - self.height_attack/2))
        else:
            self.screen.blit(pygame.transform.flip(img, self.dic_side_boolean[self.side], False), (self.x, self.y))
        pygame.display.flip()
        pygame.time.delay(5)
        pygame.draw.rect(self.screen, (255, 0, 0), (self.hitbox[0], self.hitbox[1] - 20, 50, 10))
        pygame.draw.rect(self.screen, (0, 128, 0), (
            self.hitbox[0], self.hitbox[1] - 20, 50 - (5 * (10 - (self.health * self.hitbox_health) / 10)), 10))
        self.hitbox = (self.x + self.width/3, self.y + 2, 31, 57)

    def move_to(self, obj):
        # starting point
        x0 = self.x
        y0 = self.y
        angel = angel_between_two_point(self.x, self.y, obj.x, obj.y)
        dis = self.step
        # theta is the angle (in radians) of the direction in which to move
        theta = angel
        deltax = dis * cos(theta)
        deltay = dis * sin(theta)
        # new point
        self.x = int(x0 + deltax)
        self.y = int(y0 + deltay)
        self.center_x, self.center_y = get_center_point(self.x, self.y, self.width, self.height)

    def attack(self, obj):
        obj.health -= self.power
        if obj.health < 0:
            obj.health = 0

    def distance(self, obj):
        sq1 = (self.center_x - obj.center_x) * (self.center_x - obj.center_x)
        sq2 = (self.center_y - obj.center_y) * (self.center_y - obj.center_y)
        return math.sqrt(sq1 + sq2)
        
    def __str__(self):
        return 'Type: ', str(self.type), ', x: ', str(self.x), ', y: ', str(self.y)

def get_center_point(x, y, width, height):
    x1 = x
    y1 = y
    x2 = x + width
    y2 = y + height
    angel = angel_between_two_point(x1, y1, x2, y2)
    dis = distance_for_math(x1, y1, x2, y2)
    deltax = dis * cos(angel)
    deltay = dis * sin(angel)
    # new point
    center_x = int(x1 + deltax)
    center_y = int(y1 + deltay)
    return center_x, center_y


def get_index_string(index, limit):
    if index < 10:
        string_index = '00' + str(index)
    else:
        string_index = '0' + str(index)
    if index < limit:
        index += 1
    else:
        index = 0
    return string_index, index


def angel_between_two_point(xi, yi, xii, yii):
    # point 1
    x1 = xi
    y1 = yi
    # point 2
    x2 = xii
    y2 = yii
    deltax = x2 - x1
    deltay = y2 - y1
    return atan2(deltay, deltax)


def distance_for_math(xi, yi, xii, yii):
    sq1 = (xi - xii) * (xi - xii)
    sq2 = (yi - yii) * (yi - yii)
    return math.sqrt(sq1 + sq2)
