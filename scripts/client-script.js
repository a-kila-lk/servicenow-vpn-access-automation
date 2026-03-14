function onSubmit() {
    var reason = g_form.getValue('reason_for_vpn_access');

    if (!reason || reason.length < 10) {
        alert('Please provide a detailed reason for VPN access.');
        return false;
    }
}
