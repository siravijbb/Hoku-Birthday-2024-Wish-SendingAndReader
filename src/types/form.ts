export interface wishSender {
	name: FormDataEntryValue;
	wish: FormDataEntryValue;
}

export interface Bakuwish {
	data: {
		id: string;
		name: string;
		comment: string;
		giftId: string;
		createdAt: string;
		gift: {
			id: string;
			name: string;
			desc: string | null;
			imgURL: string;
			bgColorCode: string;
			borderColor: string;
			order: number;
		};
	};
}
