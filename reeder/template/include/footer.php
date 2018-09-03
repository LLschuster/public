</div>
			</div>
		</div>
		<div class="col-md-4">
			<div id="sidebar">
				<div class="block">
					<h3>formulario de logueo</h3>
					<form role="form">
						<div class="form-group">
							<label for="userEmail">Username</label>
							<input name ="user" type="text" class="form-control" id="userEmail" placeholder="Digite su usuario"></input>
						</div>
						<div class="form-group">
							<label for="userPass">contrasena</label>
							<input name ="password" type="password" class="form-control" id="userPass" placeholder="Digite su contrasena"></input>
						</div>
						<button type="submit" class="btn btn-primary">login</button> <a class="btn btn-default"href="register.html"> crear cuenta </a>
					</form>
				</div>
				<div class="block">
				<h3>Categorias</h3>
				
					<ul class="list-group">
						<a href="topics.php"><li class="list-group-item ">Todas<span class="badge badge-primary badge-pill">0</span></li></a>
					<?php foreach(getCategories() as $cat): ?>
					   <?php if(isActive($cat->id)) :?>
						<a href="topics.php?category=<?php echo $cat->id; ?>"<?php echo $cat->id; ?>><li class="list-group-item active"><?php echo $cat->name;?><span class="badge badge-primary badge-pill">1</span></li></a>
						<?php else :?>
						<a href="topics.php?category=<?php echo $cat->id; ?>"><li class="list-group-item "><?php echo $cat->name;?><span class="badge badge-primary badge-pill">1</span></li></a>
						<?php endif;?>
						<?php endforeach; ?>
</ul>
				</div>
			</div>
	  </div>

    </main><!-- /.container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap.js"></script>
  </body>
</html>