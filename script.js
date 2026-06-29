let leaves = [];

function applyLeave(){

    let employee = document.getElementById("employee").value;
    let leaveType = document.getElementById("leaveType").value;
    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;

    if(employee==="" || leaveType==="" || start==="" || end===""){
        alert("Fill all fields");
        return;
    }

    leaves.push({
        employee,
        leaveType,
        start,
        end,
        status:"Pending"
    });

    displayLeaves();

    document.getElementById("employee").value="";
    document.getElementById("leaveType").value="";
    document.getElementById("startDate").value="";
    document.getElementById("endDate").value="";
}

function displayLeaves(){

    let table = document.getElementById("leaveTable");
    table.innerHTML="";

    leaves.forEach((leave,index)=>{

        table.innerHTML += `
        <tr>
            <td>${leave.employee}</td>
            <td>${leave.leaveType}</td>
            <td>${leave.start}</td>
            <td>${leave.end}</td>
            <td>${leave.status}</td>
            <td>
                <button class="approve-btn"
                onclick="approveLeave(${index})">
                Approve
                </button>

                <button class="reject-btn"
                onclick="rejectLeave(${index})">
                Reject
                </button>
            </td>
        </tr>`;
    });
}

function approveLeave(index){
    leaves[index].status="Approved";
    displayLeaves();
}

function rejectLeave(index){
    leaves[index].status="Rejected";
    displayLeaves();
}
