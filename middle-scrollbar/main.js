$(document).ready(function () {
  simpleDropDown();
});

// simpleDropDown
function simpleDropDown() {
  
  $(".middle-dropdown-block").each(function () {
    $(this).on("wheel", function (event) {
      event.stopPropagation();
      event.preventDefault();

      let tmpTop = event.originalEvent.wheelDelta + parseInt($(this).find(".middle-dropdown-list").css("top"));

      middleDropdownBlock($(this), tmpTop);
    });

    // mobile

    let tmpTop, touchStart, touchEnd, touchResult;

    $(this).on("touchstart", function (event) {
      scrollHeight = -1 * $(this).find(".middle-dropdown-list").height() + $(this).height();

      touchStart = 1 * event.originalEvent.touches[0].clientY;
    });

    $(this).on("touchmove", function (event) {
      event.stopPropagation();
      event.preventDefault();
      touchEnd = 1 * event.originalEvent.touches[0].clientY;

      tmpTop = -1 * (touchStart - touchEnd) + parseInt($(this).find(".middle-dropdown-list").css("top"));

      middleDropdownBlock($(this), tmpTop);

    });
  });

  function middleDropdownBlock(block, tmpTop) {
  
    const blockHeight = block.height();
    const listHeight = block.find(".middle-dropdown-list").height();
  
    const lineHeight = block.find('.middle-dropdown-line').height();
    const index = ((listHeight - blockHeight) / (blockHeight - lineHeight)).toFixed(2);
  
    const scrollHeight = -1 * listHeight + blockHeight;
  
    if (tmpTop > 0 || tmpTop < scrollHeight) {
      return;
    }
  
    block.find(".middle-dropdown-list").css("top", tmpTop + "px");
  
    block.find(".middle-dropdown-line").css("top", Math.round((tmpTop * -1) / index) + "px");
  }

}