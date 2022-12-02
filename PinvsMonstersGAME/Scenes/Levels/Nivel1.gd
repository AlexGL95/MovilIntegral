extends Node2D

onready var platformD1N = get_node("platformD1")
onready var platformD1H = get_node("PlatformH")
onready var platformD2H = get_node("plataforma3")
onready var mainMusic = get_node("MainMusic")
onready var secretMusic = get_node("SecretMusic")
onready var deadSound = get_node("scream")
func _ready():
	platformD1N.get_node("AnimationPlayer").play("PlatformV")
	platformD1H.get_node("AnimationPlayer").play("PlatformV")
	platformD2H.get_node("AnimationPlayer").play("PlatformV")
	pass # Replace with function body.



func _on_Area2D_body_entered(body: KinematicBody2D):
	deadSound.play()
	yield(get_tree().create_timer(.8),"timeout")
	get_tree().change_scene("res://Scenes/Components/gameover.tscn")



func _on_MainMusicPlayer_body_entered(body):
	mainMusic.play()
	secretMusic.stop()


func _on_SecretMusicPlayer_body_entered(body):
	mainMusic.stop()
	secretMusic.play()


func _on_Victoria_body_entered(body):
	get_tree().change_scene("res://Scenes/Components/Victory.tscn")
	pass # Replace with function body.
