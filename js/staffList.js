class StaffList {
    constructor() {
        this.staff = []
    }

    getSize() {
        return this.staff.length
    }

    #doesStaffNameExist(name) {
        for (let i = 0; i < this.staff.length; i++) {
            if (this.staff[i].name === name) {
                return true
            }
        }
    }

    add(name, age) {
        const staff = { name, age }
        if (staff.age > 20 && !this.#doesStaffNameExist(staff.name)) {
            this.staff = [staff, ...this.staff]
        } else if (staff.age <= 20) {
            throw new Error('Staff member age must be greater than 20')
        }
    }

    remove(name) {
        if(this.#doesStaffNameExist(name)) {
            const nameToDel = this.staff.indexOf(this.staff.find(el => el.name === name))
            this.staff = [...this.staff]
            this.staff.splice(nameToDel, 1)
        } else {
            return false
        }
    }
}

