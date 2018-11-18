<script>
let mychart=document.getElementsById("myChart").getContext("2d");

let linegraph=new Chart(mychart ,{
  type='line',
  data:{
    labels:["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            //fontSize: 20,

    datasets:[{
      labels:"hourly", "daily", "weekly", "monthly",
      data:[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500],
    backgroungcolor:[
      'red', 'green', 'blue', 'pink', 'yellow', 'pink','gray','orange','gold','black','white'
    ]
}]
})
</script>
