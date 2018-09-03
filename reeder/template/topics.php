<?php  include ('include/header.php')?>
				<ul id="topics">
					<?php if($topics) :?>
						<?php foreach($topics as $topic) :?>
						<li class="topic">
							<div class="row">
								<div class="col-md-2">
									<img class="avatar pull-left" src="img/<?php echo $topic->avatar?>" />
								</div>
								<div class="col-md-10">
									<div class="topic-content pull-right">
										<h3><a href="topic.php?topic=<?php echo $topic->id?>&topicName=<?php echo $topic->title?>"><?php echo $topic->title;?></a></h3>
										<div class="topic-info">
											<a href="topics.php?category=<?php echo urlFormat($topic->category_id)?>"><?php echo $topic->name?></a> >>
											<a href="topics.php?user=<?php echo urlFormat($topic->user_id)?>"><?php echo $topic->username?></a> >>
											<span class="badge pull-right"><?php echo replyCount($topic->id);?></span> >>
											 <?php echo formatDate($topic->date_created);?>
										</div>
									</div>
								</div>
							</div>
						</li>
					<?php endforeach;?>
					</ul>
					<?php else : ?>
						<p>no topics to dispaly</p>
					<?php  endif; ?>
<?php  include ('include/footer.php')?>