extends CanvasLayer

onready var live3 = $Control/Panel/live3
onready var live2 = $Control/Panel/live2
onready var live1 = $Control/Panel/live1
var timeout = 2

func _ready():
	LiveCounter.lives = 3
	
func _physics_process(delta):
	
	if LiveCounter.lives == 3:
		live1.show()
		live2.show()
		live3.show()
	
	if LiveCounter.lives == 2:
		live1.hide()
		live2.show()
		live3.show()
		
	if LiveCounter.lives == 1:
		live1.hide()
		live2.hide()
		live3.show()
		
	if LiveCounter.lives == 0: 
		live1.hide()
		live2.hide()
		live3.hide()
		
		yield(get_tree().create_timer(timeout),"timeout")
		get_tree().reload_current_scene() 

