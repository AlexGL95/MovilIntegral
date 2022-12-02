extends KinematicBody2D

var velocity = Vector2()
export (float) var SPEED = 90
const GRAVITY = 10
var JUMPFORCE = -260
var DOWNFORCE = 100
var jumping = false
var falling = false
var hurt = false
var hurtingTime = .3

onready var pinSprite = get_node("pinSprite")
onready var jumpsound = $soundJump
onready var hurtSound = get_node("hurt")

func _physics_process(delta):
	
	if(Input.is_action_pressed("liveUp")):
		LiveCounter.lives= LiveCounter.lives + 1
	
	if (Input.is_action_pressed( "ui_right" ) && !hurt):
		velocity.x = SPEED
		pinSprite.flip_h = false
		pinSprite.play( "Walk" )
			
	elif( Input.is_action_pressed( "ui_left" ) && !hurt):
		velocity.x = -SPEED
		pinSprite.flip_h = true
		pinSprite.play( "Walk" )
		
	elif(!hurt):
		pinSprite.play( "Stand" )
		jumping = false
	
	if (Input.is_action_just_pressed("jump")and is_on_floor() && !hurt):
		velocity.y=JUMPFORCE
		jumpsound.play()
		pinSprite.play("Jump")
		jumping=false
		
	if !is_on_floor() && !hurt:
		jumping=true
	
	velocity.y = velocity.y + GRAVITY
	
	if Input.is_action_pressed("down"):
		
		if !falling:
			pinSprite.play("Down")
			velocity.x = 0
			
		if Input.is_action_just_pressed("jump") and !jumping:
			set_collision_mask_bit(0,false)
			velocity.y = DOWNFORCE
			falling = true
			print('agachao')
	else:
		set_collision_mask_bit(0,true)
		falling = false
	
	velocity = move_and_slide( velocity, Vector2.UP)
	velocity.x = lerp( velocity.x, 0, 0.1 )
	
	if(get_slide_collision(get_slide_count()-1)):
		var objCollide = get_slide_collision(get_slide_count()-1).collider
		if (objCollide.is_in_group("Damage")):
			_hurt(-1)
		else:
			hurt = false
func _bounce():
	velocity.y = JUMPFORCE * 0.5
	hurtSound.play()
	
func _hurt(var extraHurt):
		hurt = true
		_bounce()
		pinSprite.play("Hurt")
		if (pinSprite.flip_h):
			velocity.x = 200
		else:
			velocity.x = -200
			
		yield(get_tree().create_timer(hurtingTime), "timeout")
		
		LiveCounter.lives -= (1 + extraHurt)
		print(LiveCounter.lives)
		if LiveCounter.lives <= 0:
			yield(get_tree().create_timer(.5),"timeout")
			get_tree().change_scene("res://Scenes/Components/gameover.tscn")
			
func _hit_reaction():
	_bounce()
	pinSprite.play("Hurt")
	yield(get_tree().create_timer(hurtingTime),"timeout")
	hurt = false
