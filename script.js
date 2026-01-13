body {
    margin: 0;
    height: 100vh;
    background: linear-gradient(to bottom, #ff9a9e, #fad0c4);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', sans-serif;
    overflow: hidden;
}

.container {
    position: relative;
}

.envelope {
    width: 300px;
    height: 200px;
    background: #fff;
    position: relative;
    cursor: pointer;
    transition: transform 1s;
}

.envelope.open {
    transform: translateY(-50px);
}

.top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ff6b81;
    clip-path: polygon(0 0, 100% 0, 50% 50%);
    z-index: 3;
    transition: transform 1s;
}

.envelope.open .top {
    transform: rotateX(180deg);
    transform-origin: top;
}

.letter {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
    transform: translateY(100%);
    transition: transform 1s;
    z-index: 2;
    text-align: center;
}

.envelope.open .letter {
    transform: translateY(0);
}

h2 {
    color: #ff4d6d;
}
