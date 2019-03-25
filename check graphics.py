import pygame
from math import sin, cos, pi
from math import atan2, pi
import math

def new_point_by_point_and_angel(x, y, dis, angel):
	# starting point
	x0 = x
	y0 = y
	
	# theta is the angle (in radians) of the direction in which to move
	theta = angel

	# r is the distance to move
	r = 2.0
	deltax = dis*cos(theta)
	deltay = dis*sin(theta)

	# new point
	x1 = int(x0 + deltax)
	y1 = int(y0 + deltay)

	return (x1,y1)

def angel_between_two_point(xi,yi,xii,yii):
	# point 1
	x1 = xi
	y1 = yi

	# point 2
	x2 = xii
	y2 = yii

	deltax = x2 - x1
	deltay = y2 - y1

	return atan2(deltay,deltax)
	

def distance(xi,xii,yi,yii):
	sq1 = (xi-xii)*(xi-xii)
	sq2 = (yi-yii)*(yi-yii)
	return math.sqrt(sq1 + sq2)

# Constants
window_width = 1440
window_height = 819

# Init screen
pygame.init()
size = (window_width,window_height)
screen = pygame.display.set_mode(size)
pygame.display.set_caption("Games Of Magic")

# Colors
red = (255,0,0)
white = (255,255,255)
black = (0,0,0)
colors = [white,black]

# Circle
radius = 20

# Fill screen and show
screen.fill((0,0,0,0))
pygame.display.flip()

# Image
i = 0
x = 0
y = 700
image = 'skillz/frozen copy.jpeg'
img = pygame.image.load(image)
castle_image1 = 'Castle/png/Asset 24.png'
c_img1 = pygame.image.load(castle_image1)
castle_image2 = 'Castle/png/Asset 21.png'
c_img2 = pygame.image.load(castle_image2)
# The code
finish = False
pygame.mixer.music.load('music1.mp3')
pygame.mixer.music.play(-1)
left = False
sof = 23
start = 'Fantasy Free Game Kit/Characters/Monster - Medusa/PNG/FW_Meduza_Running__'
end = '.png'
flag = False
while not finish:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			finish = True
	screen.blit(img, (0,0))
	pygame.display.flip()
	screen.blit(c_img1, (1300,50))
	pygame.display.flip()
	screen.blit(pygame.transform.flip(c_img2, True, False), (-150,580))
	pygame.display.flip()
	if i < 10:
		s = '00' + str(i)
	else:
		s = '0' + str(i)
	image2 = start + str(s) + end
	img2 = pygame.image.load(image2).convert_alpha()	
	#img2 =  pygame.transform.scale(img2, (130, 130))	
	#img2 = pygame.transform.rotate(img2, -1*math.degrees(angel_between_two_point(x,y,1300,0)))
	screen.blit(pygame.transform.flip(img2, left, False), (x,y))
	pygame.display.flip()
	if i < sof:
		i += 1
	else:
		i = 0
	if distance(x,1300,y,0) > 150:
		(x, y) = new_point_by_point_and_angel(x, y,3.5,angel_between_two_point(x,y,1300,0))
	else:
		start = 'Fantasy Free Game Kit/Characters/Monster - Medusa/PNG/FW_Meduza_Attack__' 
		sof = 23
		if not flag:
			i = 0
			flag = not flag
pygame.quit()