export const WHATSAPP_PHONES = {
	RECRUITMENT_1: '6281809009994', // Kahfi
	RECRUITMENT_2: '6285320200057', // Mosky
	RECRUITMENT_3: '6282125181973', // Cikoy
};

export const createWhatsAppMessage = ({
	forumName = 'FORUM NEBO NMAX Neo Turbo Indonesia',
	customInstructions = '',
} = {}) => {
	const message = `Selamat Datang di ${forumName}!

Halo! Silakan perkenalkan diri dengan format berikut:

Nama Asli: NAMA ANDA (NAMA PANGGILAN)
Alamat: ALAMAT ANDA
Kegiatan Sehari-hari: KEGIATAN SEHARI-HARI
Foto/Video Motor: KIRIM SELFIE BARENG MOTOR ANDA (WAJIB)
${customInstructions}
Mari kita jalin silaturahmi, menjaga nama baik, dan membawa berkah dalam setiap pertemuan!`;

	return encodeURIComponent(message);
};

export const createWhatsAppLink = (phone, message) => {
	return `https://wa.me/${phone}?text=${message}`;
};
