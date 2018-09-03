<?php  include ('include/header.php')?>
		<form role="form" enctype="multipart/form-data" method = "POST" action = "register.php">
					<div class="form-group">
							<label>Nombre</label>
							<input name ="name" type="text" class="form-control" id="userEmail" placeholder="Digite su nombre"></input>
						</div>
						<label>Correo electronico</label>
							<input name ="email" type="text" class="form-control"  placeholder="Digite su email"></input>
						</div>
						<div class="form-group">
							<label for="userEmail">Username</label>
							<input name ="user" type="text" class="form-control" id="userEmail" placeholder="Digite su usuario"></input>
						</div>
						<div class="form-group">
							<label for="userPass">contrasena</label>
							<input name ="password" type="password" class="form-control" id="userPass" placeholder="Digite su contrasena"></input>
						</div>
						<div class="form-group">
							<label>confirmar contrasena</label>
							<input name ="Tpassword" type="password" class="form-control"  placeholder="Digite su contrasena de nuevo"></input>
						</div>
						 
						<div class="form-group">
							<label>subir imagen de perfil 50x50</label>
							<input type="file" class="form-control-file" name="file">
						</div>
						<div class="form-group">
							<label>Algo sobre ti</label>
							<textarea class="form-control" name="usted" rows="3"></textarea>
						</div>
						<button type="submit" class="btn btn-primary">registrarse</button>
					</form>
<?php  include ('include/footer.php')?>