// Function to show the dialog box with content
function showDialog(section) {
    const dialog = document.getElementById('dialog');
    const dialogTitle = document.getElementById('dialog-title');
    const dialogText = document.getElementById('dialog-text');

    let title, text;

    switch (section) {
        case 'types':
            title = 'Types of Water Pollution';
            text = `
                <ul>
                    <li><strong>Chemical Pollution:</strong> Contamination by harmful chemicals from industrial waste, pesticides, and pharmaceuticals.</li>
                    <li><strong>Biological Pollution:</strong> Presence of harmful microorganisms like bacteria, viruses, and parasites in water.</li>
                    <li><strong>Physical Pollution:</strong> Pollution caused by physical substances like plastic debris and sediments.</li>
                    <li><strong>Nutrient Pollution:</strong> Excessive nutrients like nitrogen and phosphorus leading to eutrophication.</li>
                </ul>
            `;
            break;
        case 'causes':
            title = 'Causes of Water Pollution';
            text = `
                <ul>
                    <li>Industrial Discharge: Factories releasing waste into water bodies.</li>
                    <li>Agricultural Runoff: Fertilizers and pesticides entering water sources.</li>
                    <li>Wastewater: Improperly treated sewage and wastewater.</li>
                    <li>Oil Spills: Accidental release of oil into oceans or rivers.</li>
                    <li>Plastic Pollution: Improper disposal of plastic waste.</li>
                </ul>
            `;
            break;
        case 'effects':
            title = 'Effects of Water Pollution';
            text = `
                <ul>
                    <li>Health Risks: Contaminated water can cause diseases like cholera, hepatitis, and dysentery.</li>
                    <li>Environmental Damage: Harm to aquatic ecosystems, including loss of biodiversity.</li>
                    <li>Economic Impact: Costs associated with cleaning polluted water and health care.</li>
                    <li>Impact on Wildlife: Harmful effects on fish, birds, and other wildlife dependent on water bodies.</li>
                </ul>
            `;
            break;
        case 'precautions':
            title = 'Precautions';
            text = `
                <ul>
                    <li>Proper Waste Disposal: Follow guidelines for disposing of waste and recycling materials.</li>
                    <li>Reduce Chemical Use: Use eco-friendly products and reduce the use of harmful chemicals.</li>
                    <li>Support Clean Water Initiatives: Engage in and support community clean water projects.</li>
                    <li>Educate Others: Raise awareness about water pollution and encourage others to take action.</li>
                    <li>Conserve Water: Use water efficiently and reduce unnecessary water consumption.</li>
                </ul>
            `;
            break;
    }

    dialogTitle.innerHTML = title;
    dialogText.innerHTML = text;
    dialog.style.display = 'flex';
}

// Function to close the dialog box
function closeDialog() {
    const dialog = document.getElementById('dialog');
    dialog.style.display = 'none';
}

// Adding event listener to close the dialog when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('dialog')) {
        closeDialog();
    }
});

// Adding show class to content sections when document is ready
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content').forEach(content => content.classList.add('show'));
});
