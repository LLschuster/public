<?php  include ('include/header.php')?>
      <form role="form">
						<div class="form-group">
							<label>Titulo del tema</label>
							<input name ="title" type="text" class="form-control" placeholder="Digite titulo del tema"></input>
						</div>
						<div class="form-group">
							<label>seleccionar categoria</label>
							<select multiple class="form-control" name = "category" >
								<option>desarrollo</option>
								<option>tecnologia</option>
								<option>aprendizaje</option>
								<option>espacio</option>
							</select>
						</div>
						<div class="form-group">
							<label>Cuerpo del tema</label>
							<textarea class="form-control" name="body" rows="6" col="8"></textarea>
							<script>CKEDITOR.replace('body');</script>
						</div>
						<button type="submit" class="btn btn-primary">login</button> <a class="btn btn-default"href="register.html"> crear cuenta </a>
					</form>
<?php  include ('include/footer.php')?>