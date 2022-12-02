extends Control

onready var victorySound = $AudioStreamPlayer

func _ready():
	victorySound.play()
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass


func _on_Button_pressed():
	get_tree().change_scene("res://Scenes/Levels/Nivel1.tscn")
	pass # Replace with function body.
