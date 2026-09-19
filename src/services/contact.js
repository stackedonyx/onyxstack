export async function submitContactForm(formData) {
  await new Promise((resolve) => window.setTimeout(resolve, 650));
  return { ok: true, email: formData.email };
}
