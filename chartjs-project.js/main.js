var  myChart= document.getElementById("trafficChart").getContext('2d');
//let dailyChart= document.getElementById("dailyChart").getContext('2d');
//let mobileUsers= document.getElementById("mobileUsers").getContext('2d');
// create variables
var trafficChart= new Chart(myChart, {
  type:'line',
  data: {
    labels:["9am", "10am", "11am", "12pm", "3pm", "5pm", "6pm"],
    datasets:[{
label:'',
      data:[89, 86, 82, 78, 65, 55, 45],
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 0, 0, 0.4)'
            ],
            borderColor:[
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 158, 65, 2)'
            ],
            borderwidth:1


    }]
  },
  options:{
    legend:{
      display:false
    },
  }

})

var  dailyChart= document.getElementById("dailyChart").getContext('2d');
//let mobileUsers= document.getElementById("mobileUsers").getContext('2d');
// create variables
var dailyChart= new Chart(dailyChart, {
  type:'bar',
  data: {
    labels:["Mon", "Tue", "Wed", "Th", "Fri", "Sat", "Sun"],
    datasets:[{
label:'',
      data:[150, 145, 138, 156, 115, 100, 99],
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 0, 0, 0.4)'
            ],
            borderColor:[
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 158, 65, 2)'
            ],
            borderwidth:2


    }]
  },
  options:{
    legend:{
      display:false
    },
  }

})

var  mobileUsers= document.getElementById("mobileUsers").getContext('2d');

var mobileUsers= new Chart(mobileUsers, {
  type:'doughnut',
  data: {
    labels:["mobile", "tablet", "desktop"],
    datasets:[{
label:'',
      data:[47, 45, 30],
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'


            ],
            borderColor:[
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'


            ],
            borderwidth:2


    }]
  },
  options:{
    legend:{
      position:'right',
      labels: {
                padding: 10
            },
    },
    layout: {
            padding: {
              left: 0,
              right: 40,
              top: 0,
              bottom: 10
            }
        }
  }

})
