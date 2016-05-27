<request>
<div class="comment animated bounceInLeft" each={items}>
    <a class="avatar">
        <img src="http://semantic-ui.com/images/avatar/small/elliot.jpg" alt="product type">
    </a>
    <div class="content">
        <a class="author">{ name }</a>
        <div class="text">
            <i class="icon phone teal"></i> <a href="#">{ cell }</a>
            <i class="icon home teal"></i> <a href="#">{ home }</a>
            <p><i class="icon payment teal"></i>{ doc }  </p>
        </div>                            
    </div>
</div>
<script>
    var cache   = this;
    cache.items = opts.requests;
    
    socket.on('new_request', function (data) {
        console.log('in')
        cache.items.push(data);
        cache.update();
    });
</script>
</request>