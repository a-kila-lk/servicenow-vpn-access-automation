(function executeRule(current, previous) {

    var inc = new GlideRecord('incident');
    inc.initialize();

    var emp = current.variables.employee_id;
    var reqFor = current.request.requested_for;

    inc.short_description = 'VPN Access Request';
    inc.description = 'Employee ID: ' + emp + '\nUser requested VPN access through Service Catalog. Request Item: ' + current.number;

    if (reqFor) {
        inc.caller_id = reqFor;
    }

    inc.category = 'network';
    inc.subcategory = 'vpn';
    inc.impact = 3;
    inc.urgency = 3;
    inc.assignment_group.setDisplayValue('Network');

    inc.insert();

})(current, previous);
