var RobotMaker = function(robot, run_speed, jump_height) {
    var stage = document.getElementById('stage');
    var run_timer, jump_timer;
    var face_right = true;
    var mouseX;
    var running_dir = '';
    var x = 0;
    var y = 0;

    function find_stage_offset(el) {
        x = el.offsetLeft;
        y = el.offsetTop;
        el = el.offsetParent;

        while (el !== null) {
            x = parseInt(x) + parseInt(el.offsetLeft);
            y = parseInt(y) + parseInt(el.offsetTop);
            el = el.offsetParent;
        }

        return {
            xpos: x,
            ypos: y
        };
    }
    var stageOffset = find_stage_offset(stage);

    function run_r(phase, left) {
        face_right = true;
        running_dir = 'r';
        if ((left + (15 * run_speed)) < (mouseX - robot.offsetWidth)) {

            left = left + (15 * run_speed);
            robot.style.left = left + "px";
            switch (phase) {
                case 1:
                    robot.style.backgroundPosition = "-40px 0px";
                    run_timer = setTimeout(function() {
                        run_r(2, left);
                    }, 200);
                    break;
                case 2:
                    robot.style.backgroundPosition = "-80px 0px";
                    run_timer = setTimeout(function() {
                        run_r(3, left);
                    }, 200);
                    break;
                case 3:
                    robot.style.backgroundPosition = "-120px 0px";
                    run_timer = setTimeout(function() {
                        run_r(4, left);
                    }, 200);
                    break;
                case 4:
                    robot.style.backgroundPosition = "-80px 0px";
                    run_timer = setTimeout(function() {
                        run_r(1, left);
                    }, 200);
                    break;
            }
        } else if ((left + (15 * run_speed)) < mouseX) {
            robot.style.backgroundPosition = "0px 0px";
            running_dir = '';
        } else {
            running_dir = 'l';
            run_l(1, robot.offsetLeft);
        }
    }

    function run_l(phase, left) {
        face_right = false;
        running_dir = 'l';
        if (mouseX < robot.offsetLeft - (15 * run_speed)) {

            left = left - (15 * run_speed);
            robot.style.left = left + "px";
            switch (phase) {
                case 1:
                    robot.style.backgroundPosition = "-40px -50px";
                    run_timer = setTimeout(function() {
                        run_l(2, left);
                    }, 200);
                    break;
                case 2:
                    robot.style.backgroundPosition = "-80px -50px";
                    run_timer = setTimeout(function() {
                        run_l(3, left);
                    }, 200);
                    break;
                case 3:
                    robot.style.backgroundPosition = "-120px -50px";
                    run_timer = setTimeout(function() {
                        run_l(4, left);
                    }, 200);
                    break;
                case 4:
                    robot.style.backgroundPosition = "-80px -50px";
                    run_timer = setTimeout(function() {
                        run_l(1, left);
                    }, 200);
                    break;
            }
        } else if (mouseX < (robot.offsetLeft + robot.offsetWidth - (15 * run_speed))) {
            robot.style.backgroundPosition = "0px -50px";
            running_dir = '';
        } else {
            running_dir = 'r';
            run_r(1, robot.offsetLeft);
        }
    }

    function jmp(up, top) {
        running_dir = '';
        if (face_right) {
            robot.style.backgroundPosition = "-160px 0px";
        } else {
            robot.style.backgroundPosition = "-160px -50px";
        }

        if (up && (robot.offsetTop > (20 * (1 / jump_height)))) {
            top = top - (top * 0.1);
            robot.style.top = top + "px";
            jump_timer = setTimeout(function() {
                jmp(up, top);
            }, 60);
        } else if (up) {
            up = false;
            jump_timer = setTimeout(function() {
                jmp(up, top);
            }, 60);
        } else if (!up && (robot.offsetTop < 115)) {
            top = top + (top * 0.1);
            robot.style.top = top + "px";
            jump_timer = setTimeout(function() {
                jmp(up, top);
            }, 60);
        } else {
            robot.style.top = "120px";
            if (face_right) {
                robot.style.backgroundPosition = "0px 0px";
            } else {
                robot.style.backgroundPosition = "0px -50px";
            }

            jump_timer = false;
            if (mouseX !== undefined) {
                if (((robot.offsetLeft + (15 * run_speed)) < (mouseX - robot.offsetWidth)) && running_dir !== 'r') {
                    // make run right, if not already
                    running_dir = 'r';
                    clearTimeout(run_timer);
                    run_r(1, robot.offsetLeft);
                } else if ((mouseX < robot.offsetLeft - (15 * run_speed)) && running_dir !== 'l') {
                    // make run left, if not already
                    running_dir = 'l';
                    clearTimeout(run_timer);
                    run_l(1, robot.offsetLeft);
                }
            }
        }
    }

    function stage_mousemove_listener(e) {
        if (e.touches) {
            e.preventDefault();
            if ((e.touches[0].pageX > stageOffset.xpos) && (e.touches[0].pageX < (stageOffset.xpos + stage.offsetWidth)) && (e.touches[0].pageY > stageOffset.ypos) && (e.touches[0].pageY < (stageOffset.ypos + stage.offsetHeight))) {
                mouseX = e.touches[0].pageX - stageOffset.xpos;
            } else {
                stage_mouseout_listener();
            }

            if ((e.touches[0].pageX > robot.offsetLeft) && (e.touches[0].pageX < (robot.offsetLeft + robot.offsetWidth)) && (e.touches[0].pageY > (stageOffset.ypos + stage.offsetHeight - robot.offsetHeight)) && (e.touches[0].pageY < (stageOffset.ypos + stage.offsetHeight)) && (!jump_timer || jump_timer === undefined)) {
                clearTimeout(run_timer);
                jmp(true, robot.offsetTop);
            }

        } else {
            var posX = 0;
            if (!e) {
                var e = window.event;
            }

            if (e.pageX) {
                posX = e.pageX;
            } else if (e.clientX) {
                posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            }
            mouseX = posX - stageOffset.xpos;
        }


        if (((robot.offsetLeft + (15 * run_speed)) < (mouseX - robot.offsetWidth)) && running_dir !== 'r' && (!jump_timer || jump_timer === undefined)) {
            running_dir = 'r';
            clearTimeout(run_timer);
            run_r(1, robot.offsetLeft);
        } else if ((mouseX < robot.offsetLeft - (15 * run_speed)) && running_dir !== 'l' && (!jump_timer || jump_timer === undefined)) {
            running_dir = 'l';
            clearTimeout(run_timer);
            run_l(1, robot.offsetLeft);
        } else if ((robot.offsetLeft < mouseX) && ((robot.offsetLeft + robot.offsetWidth) > mouseX) && running_dir !== '' && (!jump_timer || jump_timer === undefined)) {
            running_dir = '';
            clearTimeout(run_timer);
            if (face_right) {
                robot.style.backgroundPosition = "0px 0px";
            } else {
                robot.style.backgroundPosition = "0px -50px";
            }
        }
    }

    function robot_mouseover_listener() {
        if (!jump_timer || jump_timer === undefined) {
            clearTimeout(run_timer);
            jmp(true, robot.offsetTop);
        }
    }

    function stage_mouseout_listener() {
        mouseX = undefined;
        running_dir = '';
        if (!jump_timer || jump_timer === undefined) {
            clearTimeout(run_timer);
            if (face_right) {
                robot.style.backgroundPosition = "0px 0px";
            } else {
                robot.style.backgroundPosition = "0px -50px";
            }
        }

    }

    (function() {
        if (stage.addEventListener) {
            stage.addEventListener('touchstart', stage_mousemove_listener, false);
            stage.addEventListener('touchmove', stage_mousemove_listener, false);
            stage.addEventListener('touchend', stage_mouseout_listener, false);

            stage.addEventListener('mousemove', stage_mousemove_listener, false);
            robot.addEventListener('mouseover', robot_mouseover_listener, false);
            stage.addEventListener('mouseout', stage_mouseout_listener, false);
        } else {
            stage.attachEvent('onmousemove', stage_mousemove_listener);
            robot.attachEvent('onmouseover', robot_mouseover_listener);
            stage.attachEvent('onmouseout', stage_mouseout_listener);
        }
    })();
}

(function() {
    var j = RobotMaker(document.getElementById('j'), 1, 1);
    var j2 = RobotMaker(document.getElementById('j2'), .8, 5);
    var j3 = RobotMaker(document.getElementById('j3'), 1.1, .5);
    var j4 = RobotMaker(document.getElementById('j4'), .5, .75);
})();