extends Area2D

var timeout =.5

func _on_Area2D_body_entered(body):
	if LiveCounter.lives < 3: 
		hide()
		set_collision_mask_bit(1,false)
		yield(get_tree().create_timer(timeout), "timeout")
		LiveCounter.lives += 1
		queue_free()
