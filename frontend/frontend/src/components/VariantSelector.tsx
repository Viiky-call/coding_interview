	// src/components/VariantSelector.tsx
	import React from 'react';
	interface Props {
	  options: string[];
	  selected: string;
	  onSelect: (value: string) => void;
	  label: string;
	}
	const VariantSelector: React.FC<Props> = ({ options, selected, onSelect, label }) => (
	  <div className="variant-selector">
	    <label>{label}: </label>
	    <div className="options">
	      {options.map(opt => (
	        <button 
	          key={opt} 
	          className={selected === opt ? 'active' : ''}
	          onClick={() => onSelect(opt)}
	        >
	          {opt}
	        </button>
	      ))}
	    </div>
	  </div>
	);
	export default VariantSelector;