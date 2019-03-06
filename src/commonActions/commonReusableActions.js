export { fetchReferralList };


const fetchReferralList = (totalListOfRefferals) => {
    const referralListTable = {
        headerRow: ["ID", "Form ID", "Form Name", "Created By", "Created Date"],
        footerRow: ["ID", "Form ID", "Form Name", "Created By", "Created Date"],
        dataRows: []
    };

    totalListOfRefferals.forEach(ref => {
        let data = [],
            _id,
            form_id,
            form_Name,
            created_By,
            created_Date;

        _id = ref._id;
        form_id = ref.forminstance.formID;
        form_Name = "Form Name";
        created_By = ref.forminstance.audit ? ref.forminstance.audit.createdBy : "";
        created_Date = ref.forminstance.audit
            ? ref.forminstance.audit.dateCreated
            : "";

        data.push(_id, form_id, form_Name, created_By, created_Date);
        referralListTable.dataRows.push(data);
    });

    return referralListTable;
}






