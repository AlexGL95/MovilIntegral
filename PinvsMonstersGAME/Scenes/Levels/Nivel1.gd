extends Node2D

onready var platformD1N = get_node("platformD1")
onready var platformD1H = get_node("PlatformH")
onready var mainMusic = get_node("MainMusic")
onready var secretMusic = get_node("SecretMusic")

func _ready():
	platformD1N.get_node("AnimationPlayer").play("PlatformV")
	platformD1H.get_node("AnimationPlayer").play("PlatformV")
	pass # Replace with function body.



func _on_Area2D_body_entered(body: KinematicBody2D):
	get_tree().change_scene("res://Scenes/Components/gameover.tscn")



func _on_MainMusicPlayer_body_entered(body):
	mainMusic.play()
	secretMusic.stop()


func _on_SecretMusicPlayer_body_entered(body):
	mainMusic.stop()
	secretMusic.play()
