var staffList = [];

class StaffList {
    add(name,age)
    {
        if(!staffList.includes(name))
        {
            if(age>20){
                let staff = {
                    name: name,
                    age : age
                }
                staffList.push(staff);
            }
            else if(age<=20){
                throw new Error('Staff member age must be greater than 20');
            }
        }
    }
    
    findByName(name)
    {
        staffList.forEach((staff, index) =>{
            if(staff.name == name)
            {
                return true;
            }
        });
        return false;
    }
    
    remove(name)
    {
        this.findByName(name);
        if(value)
        {
            staffList.forEach((staff, index) =>{
            if(staff.name == name)
            {
                staffList.splice(index, 1);
            }
            });
            return true;     
        }else{
            return false;
        }
    }
    getSize()
    {
        return staffList.length;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const obj = new StaffList();
    const operationCount = parseInt(readLine().trim());
    
    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        try {
            let res;
            if (operationInfo[0] === 'add') {
                obj.add(operationInfo[1], parseInt(operationInfo[2]));
            } else if (operationInfo[0] === 'remove') {
                res = obj.remove(operationInfo[1]);
                ws.write(`${res}\n`);
            } else if (operationInfo[0] === 'getSize') {
                res = obj.getSize();
                ws.write(`${res}\n`);
            }
        } catch (e) {
            ws.write(`${e}\n`);
        }
    }
    ws.end();
}