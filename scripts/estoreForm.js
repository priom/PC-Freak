//estoreForm.js

function estoreForm()
{
    var estoreFormObj = document.getElementById("estoreForm");
    var firstName = estoreFormObj.firstName.value;
    var lastName = estoreFormObj.lastName.value;
    var phone = estoreFormObj.phone.value;
    var email = estoreFormObj.email.value;
    var everythingOK = true;
    
    var cpu = document.getElementById("cpu");
    var cpuVal = cpu.options[cpu.selectedIndex].text;
    var gpu = document.getElementById("gpu");
    var gpuVal = gpu.options[gpu.selectedIndex].text;
    var monitor = document.getElementById("monitor");
    var monitorVal = monitor.options[monitor.selectedIndex].text;

    if ((!validateName(firstName)) && (!validateName(lastName)) && (!validatePhone(phone)) && (!validateEmail(email)))
    {
        alert("Error: Please fill out all the fields.");
        everythingOK = false;
        return null;
    }
    
    else if ((!validateName(firstName)) && (!validateName(lastName)) && (!validatePhone(phone)))
    {
        alert("Error: Please fill out the fields");
        everythingOK = false;

    }

    else if ((!validateName(firstName)) && (!validateName(lastName)) && (!validateEmail(email)))
    {
        alert("Error: Please fill out the fields");
        everythingOK = false;

    }
    
    else if ((!validateName(firstName)) && (!validateEmail(email)) && (!validatePhone(phone)))
    {
        alert("Error: Please fill out the fields");
        everythingOK = false;

    }
    
    else if ((!validateName(lastName)) && (!validateEmail(email)) && (!validatePhone(phone)))
    {
        alert("Error: Please fill out the fields");
        everythingOK = false;
    }
    
    else if ((!validateName(firstName)) && (!validateName(lastName)))
    {
        alert("Error: Please fill out first and last name.");
        everythingOK = false;

    }
    
    else if ((!validatePhone(phone)) && (!validateEmail(email)))
    {
      alert("Error: Please fill out phone and email");
      everythingOK = false;
    }

    else
    {
        if (!validateName(firstName))
        {
            alert("Error: Invalid first name.");
            everythingOK = false;
        }

        if (!validateName(lastName))
        {
            alert("Error: Invalid last name.");
            everythingOK = false;
        }

        if (!validatePhone(phone))
        {
            alert("Error: Invalid phone number.");
            everythingOK = false;
        }

        if (!validateEmail(email))
        {
            alert("Error: Invalid e-mail address.");
            everythingOK = false;
        }
    }

    if (everythingOK)
    {
        alert("CPU: $" + cpuPrice(cpuVal) + "\nGPU: $" + gpuPrice(gpuVal) + "\nMonitor: $" + 
        monitorPrice(monitorVal) + "\n\nTotal price of your PC is $" + estoreCalculate(total));
        alert("All the information looks good.\nThank you!");
        return true;
    }
    else
        return false;
}

function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validatePhone(phone)
{
    var p1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var p2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (p1 == 0 || p2 == 0)
        return true;
    else
        return false;
}

function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}

var total = 0;

function estoreCalculate(total)
{
    var cpu = document.getElementById("cpu");
    var cpuVal = cpu.options[cpu.selectedIndex].text;

    var gpu = document.getElementById("gpu");
    var gpuVal = gpu.options[gpu.selectedIndex].text;

    var monitor = document.getElementById("monitor");
    var monitorVal = monitor.options[monitor.selectedIndex].text;
    
    total = cpuPrice(cpuVal) + gpuPrice(gpuVal) + monitorPrice(monitorVal);
    return total;
}

function cpuPrice(cpu)
{
    var cpuCost;
    if (cpu == "Intel Core i7 5960X")
    {
        cpuCost = 1000;
        return cpuCost;
    }
    if (cpu == "Intel Core i7 5820K")
    {
        cpuCost = 500;
        return cpuCost;
    }
    if (cpu == "Intel Core i7 6700K")
    {
        cpuCost = 400;
        return cpuCost;
    }
}

function gpuPrice(gpu)
{
    var gpuCost;
    if (gpu == "Asus Strix GTX 980 Ti 6GB")
    {
        gpuCost = 800;
        return gpuCost;
    }
    if (gpu == "EVGA Hybrid GTX Titan X 12GB")
    {
        gpuCost = 1000;
        return gpuCost;
    }
    if (gpu == "MSI Radeon R9 Fury X 4GB HBM")
    {
        gpuCost = 600;
        return gpuCost;
    }
}

function monitorPrice(monitor)
{
    var monitorCost;
    if (monitor == "Dell UP2715K Professional IPS 5K 5120x2880p")
    {
        monitorCost = 2500;
        return monitorCost;
    }
    if (monitor == "LG 31MU97 Professional IPS 4K 4096x2160p")
    {
        monitorCost = 1500;
        return monitorCost;
    }
    if (monitor == "ACER B326HK IPS UHD 3840x2160")
    {
        monitorCost = 1000;
        return monitorCost;
    }
}