function instructions(job, h)
{
    h.append("<h1>Important Instructions</h1>");
    h.append("<p>In this task, we ask you to annotate a video. You are to place a circle around the first appearance of every human joint of interest (13 in all) in the video and track each human joint for the entire video. Watch the following sample annotation video.</p>");

	h.append('<p><video controls poster="demo000001.jpg" width="620"> <source type="video/ogg" src="demo.ogv"> </video></p>')
    h.append("<img src='body_joint_fig.jpg' width='400'>");
    h.append("<h2>Crash Course</h2>");
    var str = "<ul>";
    str += "<li>The HIT is to annotate and track <strong>every visible human joint</strong> that appears in the video, as precisely as possible.</li>";
    str += "<li>There are 13 human joints in total.</li>";
    str += "<li>The left/right position of the human joints are with respect to the person (i.e., their left and right side) not to the side of the screen the human joints appear.  The head corresponds to the most center position of the head.</li>";
    str += "<li>To assist in the annotation process, the system will attempt to use automatic methods to coarsely predict the position of joints.</li>";
    str += "<li>At the first frame where a joint is not visible find the corresponding right-column rectangle and check <strong>Not visible</strong>.  When that joint is visible again, uncheck <strong>Not visible</strong> for that joint and resume tracking it.</li>"
    /*if (job.perobject > 0)
    {
        var amount = Math.floor(job.perobject * 100);
        str += "<li>We will pay you <strong>" + amount + "&cent; for each object</strong> you annotate.</li>";
    }
    if (job.completion > 0)
    {
        var amount = Math.floor(job.completion * 100);
        str += "<li>We will award you a <strong>bonus of " + amount + "&cent; if you annotate every object</strong>.</li>";
    }
    if (job.skip > 0)
    {
        str += "<li>When the video pauses, adjust your annotations.</li>";
    }*/
    str += "<li>When done, always rewind the video and press <strong>Play</strong> to confirm that all the joints are annotated accurately and the visibility attribute of each joint is set correctly.</li>";
    str += "</ul>";
    h.append(str);

    h.append("<h2>How We Accept Your Work</h2>");
    h.append("<p>We will hand review your work and we will only accept high quality work. Your annotations are not compared against other workers. Follow these guidelines to ensure your work is accepted:</p>");

    str = "<ul>";
    str += "<li>Every visible joint of interest should be labeled for the entire video. The work shown in the video below was accepted because every visible joint has a box around it.  Even if the joint does not move, you must label it.</li>";
    str += "<li>The placed circle must be as close as possible to the selected joint. </li>";
    str += "<li>The visibility of each joint should be marked as accurately as possible.  </li>";
    str += "<li>When a joint moves, you must update its position.  You should never change the joint that a particular circle is tracking.</li>";
    str += "</ul>";
    h.append(str);


	h.append('<p><video controls poster="sample000001.jpg" width="620"> <source type="video/ogg" src="sample.ogv"> </video></p>')
    h.append("<h2>Tips</h2>");
    str = "<ul>";
    str += "<li>Due to the automatic prediction of the system you should advance the video several frames forward, move the circle over the correct joint, and move back to adjust the circle around the joint (as needed).</li>";
    str += "<li>If a joint is not visible (i.e., leaves the screen or is occluded by another joint or object), mark the <strong>Not Visible</strong> checkbox for the corresponding sidebar rectangle. When the joint becomes visible again, remember to uncheck the <strong>Not visible</strong> box.</li>";
    str += "<li> If there are many joints in the video panel, it can become difficult to select a particular joint. By pressing the lock button on a joint's sidebar rectangle, you can prevent changes to that track. Press the lock button again to reenable changes.</li>";
    str += "<li> Remembering corresponding circles across the video can be confusing. If you click on a circle in the video panel, a tooltip will pop-up that will attempt to remind you of the circle's identity.</li>";
    str += "</ul>";
    h.append(str);

/*
    h.append("<h2>Getting Started</h2>");
    //h.append("<img src='box.jpg' align='right'>");
    h.append("<p>Click the <strong>New Joint</strong> button to start annotating your first human joint. Position your cursor over the video box to click on a human joint (that has not been previously selected).</p>");

    h.append("<img src='classify.png' align='right'>");
    h.append("<p>On the right, directly below the <strong>New joint</strong> button, you will find a colorful box. The box is prompting you to input which type of human joint you have labeled. Click the correct response. </p>");
    h.append("<p>Advance the video forward and using your mouse, drag-and-drop the circle to the correct position of the human joint.  Continue in this fashion until you have reached the end of the video.  The video can be advanced in one of two ways: (i) press the <strong>Play</strong> button (video will begin to play forward) after the human joint you are tracking has moved a bit, click <strong>Pause</strong>, or (ii) advance the video by using the scroll bar.</p>");
*/
    /*
    if (job.skip > 0)
    {
        h.append("<p>Press the <strong>Play</strong> button. The video will play. When the video automatically pauses, adjust the boxes. Using your mouse, drag-and-drop the box to the correct position and resize if necessary. Continue in this fashion until you have reached the end of the video.</p>");
    }
    else
    {
        h.append("<p>Press the <strong>Play</strong> button. The video will begin to play forward. After the object you are tracking has moved a bit, click <strong>Pause</strong>. Using your mouse, drag-and-drop the box to the correct position and resize if necessary. Continue in this fashion until you have reached the end of the video.</p>");
    }*/

 //   h.append("<p>Once you have reached the end, you should rewind by pressing the rewind button (next to Play) and repeat this process for every human joint of interest.</p>");

    /*
    if (job.perobject > 0)
    {
        h.append("<p>Once you have reached the end, you should rewind by pressing the rewind button (next to Play) and repeat this process for every object of interest. You are welcome to annotate multiple objects each playthrough. We will pay you a bonus for every object that you annotate.</p>");
    }
    else
    {
        h.append("<p>Once you have reached the end, you should rewind by pressing the rewind button (next to Play) and repeat this process for every object of interest. You are welcome to annotate multiple objects each playthrough.</p>");
    }*/


  /*  h.append("<img src='outsideoccluded.png' align='right'>");
    h.append("<p>If a human joint is not visible (i.e., leaves the screen or is occluded by another human joint or object), mark the <strong>Not Visible</strong> checkbox for the corresponding sidebar rectangle. When the human joint becomes visible again, remember to uncheck the <strong>Not visible</strong> box.</p>")

    h.append("<p>If a human joint does not appear at any point in the video, don't add it via <strong>New Joint</strong></p>");

    
    h.append("<p>When you are ready to submit your work, rewind the video and watch it through one more time. Does each rectangle follow the human joint it is tracking for the entire sequence? If you find a spot where it misses, press <strong>Pause</strong> and adjust the circle. After you have checked your work, press the <strong>Submit HIT</strong> button. We will pay you as soon as possible.</p>");

    //h.append('<iframe title="YouTube video player" width="560" height="349" src="http://www.youtube.com/embed/H8cMZkz8Kbw?rel=0" frameborder="0" allowfullscreen></iframe>');
    //h.append("<img src='secret.png'>");
*/
    /*
    if (job.perobject > 0)
    {
        h.append("<p>Every object of interest should be labeled for the entire video. The above work was accepted because every object has a box around it. An object is not labeled more than once. Even if the object does not move, you must label it. We will pay you a bonus for every object you annotate.</p>");
    }
    else
    {
        h.append("<p>Every object of interest should be labeled for the entire video. The above work was accepted because every object has a box around it. An object is not labeled more than once. Even if the object does not move, you must label it.</p>");
    }*/

        /*
    h.append("<h3>Entire Video is Labeled</h3>")
    h.append("<img src='sequence1.jpg'> ");
    h.append("<img src='sequence3.jpg'> ");
    h.append("<img src='sequence4.jpg'><br>");
    h.append("<p>The entire video sequence must be labeled. When an object moves, you must update its position. A box must describe only one object. You should never change which object identity a particular box tracks.</p>");
    */
    
    /*
    h.append("<h2>Disappearing and Reappearing human joints</h3>");
    h.append("<p>For your work to be accepted, you must correctly label human joints in all frames where it is visible (i.e., within the frame bounds of the video and not obstructed by another human joint or object).  As it is often difficult to pinpoint the exact moment a human joint appears or disappears from visibility, we allow some mistakes here, but only slightly!</p>");


    h.append("<p>We want you to annotate the moment each human joint is visible in the scene.  </p>");
    */
    //h.append("<h3>Keyboard Shortcuts</h3>");
    //h.append("<p>These keyboard shortcuts are available for your convenience:</p>");
    //h.append('<ul class="keyboardshortcuts">' +
    //    '<li><code>n</code> creates a new human joint</li>' +
    //    '<li><code>t</code> toggles play/pause on the video</li>' +
    //    '<li><code>r</code> rewinds the video to the start</li>' +
    //    '<li><code>h</code> hides/shows the boxes (only after clicking Options button)</li>' +
    //    '<li><code>f</code> jump the video forward a bit</li>' +
    //    '<li><code>d</code> jump the video backward a bit</li>' +
    //    '<li><code>v</code> step the video forward a tiny bit</li>' +
    //    '<li><code>c</code> step the video backward a tiny bit</li>' +
    //    '</ul>');
}
