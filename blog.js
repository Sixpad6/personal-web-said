let blogs = []

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    image = URL.createObjectURL(image.files[0])

    let blog = {
        title : title,
        content : content,
        image : image,
        author : 'Muhamad Said',
        postAt : new Date()
    }

    blogs.unshift(blog)

    renderBlog()
}

let month = ['Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember']

function renderBlog(){
    let newContent = document.getElementById('contents')
    newContent.innerHTML = ''
    for (i=0;i<blogs.length; i++){
        newContent.innerHTML +=` <div class="blog-list-item">
        <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
        <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
        </div>
        <h1>
            <a href="blog-detail.html" target="_blank"
            >${blogs[i].title}</a
            >
        </h1>
        <div class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
        </div>
        <p>${blogs[i].content}</p>
        <div style="color: gray; text-align: right; margin-top: 20px; font-size: 15px;">
        ${getDistanceTime(blogs[i].postAt) }
            </div>
        </div>
    </div>`


    }
}

function getFullTime(time){
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB `

    return fullTime
}

function getDistanceTime(time){
    let timePost = time
    let timeNow = new Date()

    let distance = timeNow - timePost

    let milisecond = 1000
    let secondinHours = 3600
    let hoursInDay = 23

    let distanceDay = Math.floor(distance / (milisecond * secondinHours * hoursInDay))

    if(distanceDay >= 1 ){
        return(`${distanceDay} day ago`)
    } else {
        let distanceHours = Math.floor(distance / (1000 * 60 * 60))
        if (distanceHours >= 1) {
            return(`${distanceHours} Hours Ago`)
        }else {
            let distanceMinutes = Math.floor(distance / (1000 * 60))
            if (distanceMinutes >= 1){
            return(`${distanceMinutes} minutes ago`)
        }else{
            let distanceSecond = Math.floor(distance / 1000)
            return `${distanceSecond} seconds ago`
            }
        }
    }
    
}

setInterval(()=>{
    renderBlog()
},1000)