function myFun1() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    // console.log(c);

    let rocks = (document.getElementById("user").src = "images/rock.png");
    if (c == 0) {
        let rock = (document.getElementById("comp").src = "images/rock.png");
        if (rocks && rock) {
            let result = (document.getElementById("result").innerHTML = "Match Draw");
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "images/paper.png");
        if (rocks && paper) {
            let result = (document.getElementById("result").innerHTML = "User Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "images/scissor.png");
        if (rock && scissor) {
            let result = (document.getElementById("result").innerHTML = "You Win");
            let score = document.querySelector("#myscore").innerHTML;
            score++;
            document.querySelector("#myscore").innerHTML = score;
        }
    }
}


function myFun2() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    console.log(c);


    let paper = (document.getElementById("user").src = "images/paper.png");

    if (c == 0) {
        let rock = (document.getElementById("comp").src = "images/rock.png");
        if (rock && paper) {
            let result = (document.getElementById("result").innerHTML = "You Win");
            let score = document.querySelector("#myscore").innerHTML;
            score++;
            document.querySelector("#myscore").innerHTML = score;
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "images/paper.png");
        if (paper && paper) {
            let result = (document.getElementById("result").innerHTML = "Draw");
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "images/scissor.png");
        if (paper && scissor) {
            let result = (document.getElementById("result").innerHTML = "You Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    }
}


function myFun3() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    console.log(c);

    let scissor = (document.getElementById("user").src = "images/scissor.png");

    if (c == 0) {
        let rock = (document.getElementById("comp").src = "images/rock.png");
        if (scissor && rock) {
            let result = (document.getElementById("result").innerHTML = "You Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "images/paper.png");
        if (scissor && paper) {
            let result = (document.getElementById("result").innerText = "You Win");
            let score = document.querySelector("#myscore").innerHTML;
            score++;
            document.querySelector("#myscore").innerHTML = score;
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "images/scissor.png");
        if (scissor && scissor) {
            let result = (document.getElementById("result").innerHTML = "Draw");
        }
    }
}
