module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const firstName = result.firstName;
    const lastName = result.lastName;
    const email = result.email;
    const message = result.message;
    const phone = result.phone;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "mastartverseny2021@gmail.com",
        from: "noreply@smart-card.io",
        subject: "Contact",
        html: `
          Name: ${firstName + lastName}<br>
          email: ${email} <br>
          phone: ${phone} <br>
          <p>
             ${message}
          </p>
          `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
