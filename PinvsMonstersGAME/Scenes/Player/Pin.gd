extends Position2D

var velocity = Vector2()
export (float) var SPEED = 90
const GRAVITY = 10
var JUMPFORCE = -250
var jumping = false
var falling = false
var hurt = false
var hurtingTime = .3

onready var pinNode = get_node("Pin")
onready var pinSprite = get_node("Pin/pinSprite")

func _physics_process(delta):
	
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
	
	if (Input.is_action_just_pressed("jump")and pinNode.is_on_floor() && !hurt):
		velocity.y=JUMPFORCE
		jumping=false
	if !pinNode.is_on_floor():
		pinSprite.play("Jump")
		jumping=true
	
	velocity.y = velocity.y + GRAVITY
	
	velocity = pinNode.move_and_slide( velocity, Vector2.UP)
	velocity.x = lerp( velocity.x, 0, 0.1 )
	
	if(pinNode.get_slide_collision(pinNode.get_slide_count()-1)):
		var objCollide = pinNode.get_slide_collision(pinNode.get_slide_count()-1).collider
		if (objCollide.is_in_group("Damage")):
			hurt = true
			_bounce()
			pinSprite.play("Hurt")
			if (pinSprite.flip_h):
				velocity.x = 100
			else:
				velocity.x = -100
				
			yield(pinNode.get_tree().create_timer(hurtingTime), "timeout")
			
			LiveCounter.lives -= 1
		else:
			hurt = false

func _bounce():
	velocity.y = JUMPFORCE * 0.5
	
