MQA.EventUtil.observe(window, 'load',function(){
MQA.withModule('largezoom', 'insetmapcontrol', 'mousewheel','shapes', function() {
 
    // add the Large Zoom control
    map.addControl(
      new MQA.LargeZoom(),
      new MQA.MapCornerPlacement(MQA.MapCorner.TOP_RIGHT, new MQA.Size(5,5))
    );
 

 
    // add the small Inset Map with custom options
    map.addControl(
      new MQA.InsetMapControl({
        size: { width: 150, height: 125 },
        zoom: 3,
        mapType: 'map',
        minimized: true
      }),
      new MQA.MapCornerPlacement(MQA.MapCorner.BOTTOM_RIGHT)
    );
 
    // enable zooming with your mouse
    map.enableMouseWheelZoom();
  });

});