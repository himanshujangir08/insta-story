const arr = [
    {
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1692345083308-2ebd7a1063fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1692513873777-40ec199fc071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1692374225942-0209583f2882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1692356573087-00b545ac4694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        story: "https://plus.unsplash.com/premium_photo-1692196626076-08b7c0d2ca09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1610994709365-63c27a51f640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
]


const dpPhoto = document.querySelector(".stories");
const dpStory = document.querySelector(".fullScreen");

clutter = "";
arr.forEach((elem, index) => {
    clutter += ` <div class="story">
                <img id="${index}" src="${elem.dp}" alt="">
          </div>`
})
dpPhoto.innerHTML = clutter;


dpPhoto.addEventListener("click", (details) => {
    dpStory.style.display = "block";
    dpStory.style.backgroundImage = `url(${arr[details.target.id].story})`

    setTimeout(() => {
        dpStory.style.display = "none";
    }, 2000)
})
