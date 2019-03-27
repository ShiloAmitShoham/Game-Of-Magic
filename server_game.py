import socket
import select

server_socket = socket.socket()
server_socket.bind(('0.0.0.0', 8080))
server_socket.listen(5)
open_client_sockets = []
messages_to_send = []


def send_waiting_messages(wlist):
	for message in messages_to_send:
		(client_socket, data) = message
		for socket_to_send in wlist:
			socket_to_send.send(data)
		messages_to_send.remove(message)


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
				print 'Appendding message'
				messages_to_send.append((current_socket, data))

	send_waiting_messages(wlist)
