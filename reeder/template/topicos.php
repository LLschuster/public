<?php  include ('include/header.php')?>

				<ul id="topics">
				<?php foreach ($topics as $topic) : ?>
						<li id="main-topic" class="topic topic">
							<div class="row">
								<div class="col-md-2">
									<div class="user-info">
										<img class="avatar pull-left" src="img/<?php echo $topic->avatar;?>" />
										<ul>
											<a href="topic.php?user=<?php echo $topic->user_id?>"><li><strong><?php echo $topic->username;?></strong></li></a>
											<li><?php echo  getNumberRepliesByUser($topic->user_id);?></li>
											
										</ul>
									</div>
								</div>
								<div class="col-md-10">
									<div class="topic-content pull-right">
										<p > 
										<?php echo $topic->body;?>
										</p>
									</div>
								</div>
							</div>
						</li>
						<?php endforeach;?>
					<h3>Provee una respuesta</h3>
					<form role="form">
						<div class="form-group">
							<label>Cuerpo del tema</label>
							<textarea class="form-control" name="body" rows="6" col="8"></textarea>
							<script>CKEDITOR.replace('body');</script>
						</div>
						<button type="submit" class="btn btn-primary">enviar</button> 
					</form>
<?php  include ('include/footer.php')?>