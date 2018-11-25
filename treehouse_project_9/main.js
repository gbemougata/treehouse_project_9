//declare variables
let webChart=document.getElementById("webTraffic");
let  dailyChart=document.getElementById("dailyTraffic");
let mobileChart=document.getElementById("mobileUsers");
//initialize the first chart
let trafficChart=new Chart(webChart, {
  type:'line',
  data:{
    labels:['9am', '10am', '11am', '12pm', '13pm', '14pm', '15pm','16pm', '17pm'],
    datasets:[{
     data:'',
      data:[12, 14, 15, 60, 65, 110, 120, 110, 64, 20],
      backgroundColor:'green'

    }]
  },
  options:{
  legend:{display:false},


  }
})

//Daily traffic chart
let dailyTraffic=new Chart(dailyChart, {
  type:'bar',
  data:{
    labels:['M', 'T', 'W', 'TH', 'F', 'S', 'SUN'],
    datasets:[{
      data:'',
      data:[98, 120, 136, 160, 175, 250, 95, 88],
      backgroundColor:['green', 'blue', 'gray', 'pink', 'red', 'yellow', 'brown']
    }]
  },
  options:{
  legend:{display:false},


  }
})

//donut Chart for mobile mobileUsers
let mobileUsers=new Chart(mobileChart, {
  type:'doughnut',
  data:{
    labels:['mobile', 'tablet', 'desktop'],
    datasets:[{
      data:'',
      data:[350, 175,92],
      backgroundColor:['pink', 'orange','black']
    }]
  },
  options:{
  legend:{display:true},


  }

})
