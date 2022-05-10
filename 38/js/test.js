const mouseoverHandler = function () {
    console.log("mouseover");
};

const mousemoveHandler = function () {
    console.log("mousemove");
    document
        .querySelector(".box")
        .removeEventListener("mouseover", mouseoverHandler); // mousemove이벤트 발생시 mouseover이벤트를 삭제함.
};

document.querySelector(".box").addEventListener("mouseover", mouseoverHandler);
document.querySelector(".box").addEventListener("mousemove", mousemoveHandler);
