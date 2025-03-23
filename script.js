let currentStage = 0;
const main_progress_bar = document.getElementById("main-bar");
const main_progress_bar_stops = ["0px" , "123px" , "179px" , "254px" , "328px" , "384px" , "500px"]
const task1_bar = document.getElementById('task-bar1');
const task2_bar = document.getElementById('task-bar2');
const task3_bar = document.getElementById('task-bar3');
const task4_bar = document.getElementById('task-bar4');
const task5_bar = document.getElementById('task-bar5');
const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const task3 = document.getElementById('task3');
const task4 = document.getElementById('task4');
const task5 = document.getElementById('task5');
const taskE = document.getElementById('taskE');
const prev_btn = document.getElementById('prev');
const next_btn = document.getElementById('next');


function active_task(task){
    setTimeout(function(){
        task.classList.add('active');
    },300)
}

function remove_task_bar(task_bar){
    setTimeout(function(){
        task_bar.classList.remove('left-bar-full');
        task_bar.classList.remove('right-bar-full');
    },300)
}

function next(){
    if(currentStage!=6){
        currentStage++;
        main_progress_bar.style.borderTop = main_progress_bar_stops[currentStage]+" solid #3498db";
        if(currentStage==1){
            prev_btn.disabled = false;
            setTimeout(function(){
                task1_bar.classList.add('left-bar-full');
                active_task(task1);
            },300);
        }
        else if(currentStage==2){
            setTimeout(function(){
                task2_bar.classList.add('right-bar-full');
                active_task(task2);
            },300);
        }
        else if(currentStage==3){
            setTimeout(function(){
                task3_bar.classList.add('left-bar-full');
                active_task(task3);
            },300);
        }
        else if(currentStage==4){
            setTimeout(function(){
                task4_bar.classList.add('right-bar-full');
                active_task(task4);
            },300);
        }
        else if(currentStage==5){
            setTimeout(function(){
                task5_bar.classList.add('left-bar-full');
                active_task(task5);
            },300);
        }
        else if(currentStage==6){
            active_task(taskE);
            next_btn.disabled = true;
        }
    }
}
function prev(){
    if(currentStage!=0){
        if(currentStage==1){
            task1.classList.remove('active');
            remove_task_bar(task1_bar);
        }
        else if(currentStage==2){
            task2.classList.remove('active');
            remove_task_bar(task2_bar);
        }
        else if(currentStage==3){
            task3.classList.remove('active');
            remove_task_bar(task3_bar);
        }
        else if(currentStage==4){
            task4.classList.remove('active');
            remove_task_bar(task4_bar);
        }
        else if(currentStage==5){
            task5.classList.remove('active');
            remove_task_bar(task5_bar);
        }
        else if(currentStage==6){
            next_btn.disabled = false;
            taskE.classList.remove('active');
        }
        currentStage--;
        if (currentStage==0){
            prev_btn.disabled = true;
        }
        setTimeout(function(){main_progress_bar.style.borderTop = main_progress_bar_stops[currentStage]+" solid #3498db";},400)
    }
}