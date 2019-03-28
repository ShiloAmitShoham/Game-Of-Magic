import socket
import select

server_socket = socket.socket()
server_socket.bind(('0.0.0.0', 8080))
server_socket.listen(5)
open_client_sockets = []
messages_to_send = []
wait_for_game = []
send_start_game = []
dict_has_other_player = {}


def send_waiting_messages(wlist):
	for message in messages_to_send:
		(client_socket, data) = message
		for socket_to_send in wlist:
			socket_to_send.send(data)
			if dict_has_other_player[client_socket] in wlist:
				dict_has_other_player[client_socket].send(data)
		messages_to_send.remove(message)
	for tuple_to_send in send_start_game:
		if tuple_to_send[0] in wlist:
			tuple_to_send[0].send('right')
		if tuple_to_send[1] in wlist:
			tuple_to_send[1].send('left')
		send_start_game.remove(tuple_to_send)

while True:
	rlist, wlist, xlist = select.select([server_socket] + open_client_sockets, open_client_sockets, [])
	for current_socket in rlist:
		if current_socket is server_socket:
			(new_socket, address) = server_socket.accept()
			open_client_sockets.append(new_socket)
			print 'Client connected'
		else:
			print 'Getting data'
			data = current_socket.recv(1024).replace('\n', '')
			if data == '':
				open_client_sockets.remove(current_socket)
				print "Connection with client closed."
			else:
				if 'want-play' in data:
					if len(wait_for_game) == 0:
						wait_for_game.append(current_socket)
						print 'want-play'
					else:
						send_start_game.append((current_socket, wait_for_game[0]))
						dict_has_other_player.update({current_socket: wait_for_game[0]})
						dict_has_other_player.update({wait_for_game[0]: current_socket})
						wait_for_game.remove(wait_for_game[0])
				else:
					print 'Appendding message'
					messages_to_send.append((current_socket, data))

	send_waiting_messages(wlist)
