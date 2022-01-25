module.exports = {
  // POST /contact_form
  send: async ctx => {
    data = ctx.request.body
    
    await strapi.plugins['email'].services.email.send({
      to: 'will@xnizstudio.com',
      from: data.email,
      subject: 'Website Inquiry',
      text: `
        You have received an inquiry from ${data.name} to develop a web application.
        Their current website URL is ${data.url} and the budget is $${data.budget}.

        Their website is described as ${data.description}. 
        
        Respond back as it is ${data.urgent}.
      `,
      html:`
        <h4>You received an inquiry from ${data.name} to develop a web application.</h4>
        <hr>
        <p>Their current website URL is ${data.url} and the budget is <strong>$${data.budget}</strong>.</p>
        <p>Their website is described as: ${data.description}.</p>
        <p>The urgent checkbox was ${data.urgent}.</p>
        <hr>
        <p>You may want to reply ASAP as it may be a decent lead.</p>
      `
    });
    
    ctx.status = 200;
    ctx.redirect('https://xnizstudio.com/get-in-touch')
  },
};
