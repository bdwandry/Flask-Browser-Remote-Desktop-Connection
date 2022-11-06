import multiprocessing

from send_keyboard import spawn_keyboard
from send_mouse import spawn_mouse
from send_picture import spawn_picture

if __name__ == "__main__":
    processes = [
        multiprocessing.Process(target=spawn_picture),
        multiprocessing.Process(target=spawn_keyboard),
        multiprocessing.Process(target=spawn_mouse),
    ]

    for p in processes:
        p.start()

    for p in processes:
        p.join()
