extends KinematicBody2D

export var direction = 1

var velocity = Vector2()
var time_death = 0.2
var speed = 50

onready var enemy_facing = $AnimatedSprite
onready var floor_check = $RayCast2D
onready var collision = $CollisionShape2D
onready var top_checker = $TopChecker
onready var side_checker = $SideChecker

const DOWNFORCE = 20
const MOVEFORCE = 50

func _ready():
	if direction == 1:
		enemy_facing.flip_h = false
	else:
		enemy_facing.flip_h = true
			
	floor_check.position.x = collision.shape.get_extents().x * direction
	
func _physics_process(delta):
	
	if is_on_wall() or not floor_check.is_colliding() and is_on_floor():
		direction = direction * -1
		enemy_facing.flip_h = not enemy_facing.flip_h
		floor_check.position.x = collision.shape.get_extents().x * direction
	
	velocity.y += DOWNFORCE
	
	velocity.x = speed * direction
	
	velocity = move_and_slide(velocity,Vector2.UP)
 
func _on_TopChecker_body_entered(body):
	body._bounce()
	enemy_facing.offset.y = 7
	enemy_facing.play("dead")
	set_collision_mask_bit(2,false)
	set_collision_mask_bit(6,false)
	top_checker.set_collision_mask_bit(2,false)
	top_checker.set_collision_mask_bit(6,false)
	side_checker.set_collision_mask_bit(2,false)
	side_checker.set_collision_mask_bit(6,false)
	speed = 0
	yield(get_tree().create_timer(time_death),"timeout")
	queue_free()

func _on_SideChecker_body_entered(body):
	if body.get_collision_layer() == 1:
		body._hurt(2)
	elif body.get_collision_layer() == 64:
		body.queue_free()
		queue_free()


