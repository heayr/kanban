const LIST_TYPES = {
	BACKLOG: 'backlog',
	READY: 'Ready',
	IN_PROGRESS: 'inProgress',
	DONE: 'done',
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
	[LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.DONE]: 'Finished',
}

 const LIST_COLORS = {
 	[LIST_TYPES.BACKLOG]: '#b95959',
 	[LIST_TYPES.READY]: '#550055',
 	[LIST_TYPES.IN_PROGRESS]: '#4b69b1',
 	[LIST_TYPES.DONE]: '#a0b959',
 }

// const LIST_COLORS = {
// 	[LIST_TYPES.BACKLOG]: 'white',
// 	[LIST_TYPES.READY]: 'white',
// 	[LIST_TYPES.IN_PROGRESS]: 'white',
// 	[LIST_TYPES.DONE]: 'white',
// }

const LIST_TYPES_FOOTER = {
	BACKLOG: 'backlog',
	DONE: 'done',
}

const LIST_COPY_FOOTER = {
	[LIST_TYPES.BACKLOG]: 'Active Tasks',
	[LIST_TYPES.DONE]: 'Finished',
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS, LIST_TYPES_FOOTER, LIST_COPY_FOOTER}
