	#!/usr/bin/python
	import pygame
	from math import sin, cos, pi
	from math import atan2, pi
	import math

	class Castle(object):
		
		def __init__(self, x, y, side, screen, start_index):
				self.x = x
				self.y = y
				self.width = 300
				self.height = 237
				self.start_health = 1000
				self.health = self.start_health
				self.hitbox_health = float(100) / float(self.start_health)
				self.hitbox = (self.x + 50, self.y + 11, 29, 52)
				self.side = side
				self.img_castle = 'Castle/png/Asset '
				self.start_index = start_index
				self.dic_side_boolean = {'left':True, 'right':False}
				self.screen = screen
				self.center_x, self.center_y = get_center_point(self.x, self.y, self.width, self.height)
		
		def show(self):
				if self.health >= (self.start_health/3)*2:
					img_c = pygame.image.load(self.img_castle + str(self.start_index) + '.png')
					img = pygame.transform.scale(img_c, (self.width, self.height))
					self.screen.blit(pygame.transform.flip(img, self.dic_side_boolean[self.side], False), (self.x, self.y))
				elif self.health >= self.start_health/3:
					img_c = pygame.image.load(self.img_castle + str(self.start_index + 1) + '.png')
					img = pygame.transform.scale(img_c, (300, 237))
					self.screen.blit(pygame.transform.flip(img, self.dic_side_boolean[self.side], False), (self.x, self.y))
				else:
					img_c = pygame.image.load(self.img_castle + str(self.start_index + 2) + '.png')
					img = pygame.transform.scale(img_c, (300, 175))
					self.screen.blit(pygame.transform.flip(img, self.dic_side_boolean[self.side], False), (self.x, self.y + 62))
				pygame.display.flip()
				if self.side is 'left':
					pygame.draw.rect(self.screen, (255, 0, 0), (self.hitbox[0] + 150, self.hitbox[1] - 20, 50, 10))
					pygame.draw.rect(self.screen, (0, 128, 0), (
					self.hitbox[0] + 150, self.hitbox[1] - 20, 50 - (5 * (10 - (self.health * self.hitbox_health) / 10)), 10))
				else:
					pygame.draw.rect(self.screen, (255, 0, 0), (self.hitbox[0] + 50, self.hitbox[1] - 20, 50, 10))
					pygame.draw.rect(self.screen, (0, 128, 0), (
					self.hitbox[0] + 50, self.hitbox[1] - 20, 50 - (5 * (10 - (self.health * self.hitbox_health) / 10)), 10))
				self.hitbox = (self.x + 17, self.y + 2, 31, 57)
		def __str__(self):
			return "side :" + str(self.side) + ", x :" + str(self) + ', y :' + str(self.y)

	def get_center_point(x, y, width, height):
		x1 = x
		y1 = y
		x2 = x + width
		y2 = y + height
		angel = angel_between_two_point(x1, y1, x2, y2)
		dis = distance(x1, y1, x2, y2)
		deltax = dis * cos(angel)
		deltay = dis * sin(angel)
		# new point
		center_x = int(x1 + deltax)
		center_y = int(y1 + deltay)
		return center_x, center_y

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


	def distance(xi, yi, xii, yii):
		sq1 = (xi - xii) * (xi - xii)
		sq2 = (yi - yii) * (yi - yii)
		return math.sqrt(sq1 + sq2)
		