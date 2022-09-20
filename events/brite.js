<div id="example-widget-trigger"></div>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function () {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '52766401728',
        iframeContainerId: 'example-widget-trigger',
        iframeContainerHeight: 425,
        onOrderComplete: exampleCallback,
    });
</script>
