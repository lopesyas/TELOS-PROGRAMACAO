const stringRepasses = `[{"orgao":"Polícia Civil","data":"01/01/2024","valor":5500.00,"status":"sucesso"},{"orgao":"Polícia Rodoviária Federal","data":"02/01/2024","valor":6000.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Polícia Militar","data":"03/01/2024","valor":4500.00,"status":"sucesso"},{"orgao":"Corpo de Bombeiros","data":"04/01/2024","valor":7000.00,"status":"sucesso"},{"orgao":"Guarda Municipal","data":"05/01/2024","valor":3500.00,"status":"falha","motivo":"Documentação incompleta"},{"orgao":"Receita Federal","data":"06/01/2024","valor":8000.00,"status":"sucesso"},{"orgao":"Ministério Público","data":"07/01/2024","valor":9000.00,"status":"falha","motivo":"Erro no sistema"},{"orgao":"Defesa Civil","data":"08/01/2024","valor":4000.00,"status":"sucesso"},{"orgao":"Detran","data":"09/01/2024","valor":5000.00,"status":"sucesso"},{"orgao":"Polícia Federal","data":"10/01/2024","valor":6500.00,"status":"falha","motivo":"Falta de recursos"},{"orgao":"Ibama","data":"11/01/2024","valor":5500.00,"status":"sucesso"},{"orgao":"Anvisa","data":"12/01/2024","valor":6000.00,"status":"sucesso"},{"orgao":"Inmetro","data":"13/01/2024","valor":3000.00,"status":"falha","motivo":"Dados incorretos"},{"orgao":"Cetesb","data":"14/01/2024","valor":7000.00,"status":"sucesso"},{"orgao":"Susep","data":"15/01/2024","valor":8000.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Polícia Civil","data":"16/01/2024","valor":5200.00,"status":"sucesso"},{"orgao":"Polícia Rodoviária Federal","data":"17/01/2024","valor":6100.00,"status":"falha","motivo":"Erro humano"},{"orgao":"Polícia Militar","data":"18/01/2024","valor":4600.00,"status":"sucesso"},{"orgao":"Corpo de Bombeiros","data":"19/01/2024","valor":7100.00,"status":"sucesso"},{"orgao":"Guarda Municipal","data":"20/01/2024","valor":3600.00,"status":"falha","motivo":"Sistema fora do ar"},{"orgao":"Receita Federal","data":"21/01/2024","valor":8100.00,"status":"sucesso"},{"orgao":"Ministério Público","data":"22/01/2024","valor":9100.00,"status":"falha","motivo":"Recursos insuficientes"},{"orgao":"Defesa Civil","data":"23/01/2024","valor":4100.00,"status":"sucesso"},{"orgao":"Detran","data":"24/01/2024","valor":5100.00,"status":"sucesso"},{"orgao":"Polícia Federal","data":"25/01/2024","valor":6600.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Ibama","data":"26/01/2024","valor":5600.00,"status":"sucesso"},{"orgao":"Anvisa","data":"27/01/2024","valor":6100.00,"status":"sucesso"},{"orgao":"Inmetro","data":"28/01/2024","valor":3100.00,"status":"falha","motivo":"Dados incorretos"},{"orgao":"Cetesb","data":"29/01/2024","valor":7100.00,"status":"sucesso"},{"orgao":"Susep","data":"30/01/2024","valor":8100.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Polícia Civil","data":"31/01/2024","valor":5300.00,"status":"sucesso"},{"orgao":"Polícia Rodoviária Federal","data":"01/01/2024","valor":6200.00,"status":"falha","motivo":"Erro humano"},{"orgao":"Polícia Militar","data":"02/01/2024","valor":4700.00,"status":"sucesso"},{"orgao":"Corpo de Bombeiros","data":"03/01/2024","valor":7200.00,"status":"sucesso"},{"orgao":"Guarda Municipal","data":"04/01/2024","valor":3700.00,"status":"falha","motivo":"Sistema fora do ar"},{"orgao":"Receita Federal","data":"05/01/2024","valor":8200.00,"status":"sucesso"},{"orgao":"Ministério Público","data":"06/01/2024","valor":9200.00,"status":"falha","motivo":"Recursos insuficientes"},{"orgao":"Defesa Civil","data":"07/01/2024","valor":4200.00,"status":"sucesso"},{"orgao":"Detran","data":"08/01/2024","valor":5200.00,"status":"sucesso"},{"orgao":"Polícia Federal","data":"09/01/2024","valor":6700.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Ibama","data":"10/01/2024","valor":5700.00,"status":"sucesso"},{"orgao":"Anvisa","data":"11/01/2024","valor":6200.00,"status":"sucesso"},{"orgao":"Inmetro","data":"12/01/2024","valor":3200.00,"status":"falha","motivo":"Dados incorretos"},{"orgao":"Cetesb","data":"13/01/2024","valor":7200.00,"status":"sucesso"},{"orgao":"Susep","data":"14/01/2024","valor":8200.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Polícia Civil","data":"15/01/2024","valor":5400.00,"status":"sucesso"},{"orgao":"Polícia Rodoviária Federal","data":"16/01/2024","valor":6300.00,"status":"falha","motivo":"Erro humano"},{"orgao":"Polícia Militar","data":"17/01/2024","valor":4800.00,"status":"sucesso"},{"orgao":"Corpo de Bombeiros","data":"18/01/2024","valor":7300.00,"status":"sucesso"},{"orgao":"Guarda Municipal","data":"19/01/2024","valor":3800.00,"status":"falha","motivo":"Sistema fora do ar"},{"orgao":"Receita Federal","data":"20/01/2024","valor":8300.00,"status":"sucesso"},{"orgao":"Ministério Público","data":"21/01/2024","valor":9300.00,"status":"falha","motivo":"Recursos insuficientes"},{"orgao":"Defesa Civil","data":"22/01/2024","valor":4300.00,"status":"sucesso"},{"orgao":"Detran","data":"23/01/2024","valor":5300.00,"status":"sucesso"},{"orgao":"Polícia Federal","data":"24/01/2024","valor":6800.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Ibama","data":"25/01/2024","valor":5800.00,"status":"sucesso"},{"orgao":"Anvisa","data":"26/01/2024","valor":6300.00,"status":"sucesso"},{"orgao":"Inmetro","data":"27/01/2024","valor":3300.00,"status":"falha","motivo":"Dados incorretos"},{"orgao":"Cetesb","data":"28/01/2024","valor":7300.00,"status":"sucesso"},{"orgao":"Susep","data":"29/01/2024","valor":8300.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Polícia Civil","data":"30/01/2024","valor":5500.00,"status":"sucesso"},{"orgao":"Polícia Rodoviária Federal","data":"31/01/2024","valor":6400.00,"status":"falha","motivo":"Erro humano"},{"orgao":"Polícia Militar","data":"01/01/2024","valor":4900.00,"status":"sucesso"},{"orgao":"Corpo de Bombeiros","data":"02/01/2024","valor":7400.00,"status":"sucesso"},{"orgao":"Guarda Municipal","data":"03/01/2024","valor":3900.00,"status":"falha","motivo":"Sistema fora do ar"},{"orgao":"Receita Federal","data":"04/01/2024","valor":8400.00,"status":"sucesso"},{"orgao":"Ministério Público","data":"05/01/2024","valor":9400.00,"status":"falha","motivo":"Recursos insuficientes"},{"orgao":"Defesa Civil","data":"06/01/2024","valor":4400.00,"status":"sucesso"},{"orgao":"Detran","data":"07/01/2024","valor":5400.00,"status":"sucesso"},{"orgao":"Polícia Federal","data":"08/01/2024","valor":6900.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Ibama","data":"09/01/2024","valor":5900.00,"status":"sucesso"},{"orgao":"Anvisa","data":"10/01/2024","valor":6400.00,"status":"sucesso"},{"orgao":"Inmetro","data":"11/01/2024","valor":3400.00,"status":"falha","motivo":"Dados incorretos"},{"orgao":"Cetesb","data":"12/01/2024","valor":7400.00,"status":"sucesso"},{"orgao":"Susep","data":"13/01/2024","valor":8400.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Polícia Civil","data":"14/01/2024","valor":5600.00,"status":"sucesso"},{"orgao":"Polícia Rodoviária Federal","data":"15/01/2024","valor":6500.00,"status":"falha","motivo":"Erro humano"},{"orgao":"Polícia Militar","data":"16/01/2024","valor":5000.00,"status":"sucesso"},{"orgao":"Corpo de Bombeiros","data":"17/01/2024","valor":7500.00,"status":"sucesso"},{"orgao":"Guarda Municipal","data":"18/01/2024","valor":4000.00,"status":"falha","motivo":"Sistema fora do ar"},{"orgao":"Receita Federal","data":"19/01/2024","valor":8500.00,"status":"sucesso"},{"orgao":"Ministério Público","data":"20/01/2024","valor":9500.00,"status":"falha","motivo":"Recursos insuficientes"},{"orgao":"Defesa Civil","data":"21/01/2024","valor":4500.00,"status":"sucesso"},{"orgao":"Detran","data":"22/01/2024","valor":5500.00,"status":"sucesso"},{"orgao":"Polícia Federal","data":"23/01/2024","valor":7000.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Ibama","data":"24/01/2024","valor":6000.00,"status":"sucesso"},{"orgao":"Anvisa","data":"25/01/2024","valor":6500.00,"status":"sucesso"},{"orgao":"Inmetro","data":"26/01/2024","valor":3500.00,"status":"falha","motivo":"Dados incorretos"},{"orgao":"Cetesb","data":"27/01/2024","valor":7500.00,"status":"sucesso"},{"orgao":"Susep","data":"28/01/2024","valor":8500.00,"status":"falha","motivo":"Problemas técnicos"},{"orgao":"Polícia Civil","data":"29/01/2024","valor":5700.00,"status":"sucesso"},{"orgao":"Polícia Rodoviária Federal","data":"30/01/2024","valor":6600.00,"status":"falha","motivo":"Erro humano"},{"orgao":"Polícia Militar","data":"31/01/2024","valor":5100.00,"status":"sucesso"}]`;

// transformação para JSON
const objetoRepasses = JSON.parse(stringRepasses);

// ========== FUNÇÃO PARA IDENTIFICAR TRANSAÇÕES INVÁLIDAS ==========
function identificarTransacoesInvalidas(repasses) {
    console.log("=== IDENTIFICAÇÃO DE TRANSAÇÕES INVÁLIDAS ===");
    
    // Critério: transações com status "falha" e sem motivo especificado
    const transacoesInvalidas = repasses.filter(repasse => 
        repasse.status === 'falha' && (!repasse.motivo || repasse.motivo.trim() === '')
    );
    
    console.log(`Total de transações inválidas identificadas: ${transacoesInvalidas.length}`);
    
    if (transacoesInvalidas.length > 0) {
        console.log("\n📋 LISTA DE TRANSAÇÕES INVÁLIDAS:");
        transacoesInvalidas.forEach((transacao, index) => {
            console.log(`${index + 1}. ${transacao.orgao} - ${transacao.data} - R$ ${transacao.valor.toFixed(2)}`);
        });
    } else {
        console.log("✅ Nenhuma transação inválida encontrada.");
    }
    
    return transacoesInvalidas;
}

// ========== FUNÇÃO PARA FILTRAR TRANSAÇÕES VÁLIDAS ==========
function obterTransacoesValidas(repasses) {
    const transacoesInvalidas = identificarTransacoesInvalidas(repasses);
    
    // Filtrar apenas transações válidas (excluindo as inválidas)
    const transacoesValidas = repasses.filter(repasse => 
        !(repasse.status === 'falha' && (!repasse.motivo || repasse.motivo.trim() === ''))
    );
    
    console.log(`\n📊 RESUMO DE VALIDAÇÃO:`);
    console.log(`Total de transações originais: ${repasses.length}`);
    console.log(`Transações inválidas removidas: ${transacoesInvalidas.length}`);
    console.log(`Transações válidas para análise: ${transacoesValidas.length}`);
    
    return transacoesValidas;
}

// ========== FUNÇÕES ATUALIZADAS (USANDO APENAS TRANSAÇÕES VÁLIDAS) ==========

// Total repasses - ATUALIZADO
function contarTotalRepasses(dados) {
    const transacoesValidas = obterTransacoesValidas(dados);
    console.log("===TOTAL DE REPASSES VÁLIDOS PROCESSADOS===");
    return `Total de repasses válidos processados: ${transacoesValidas.length}`;
}

// Análise de Transações por Status - ATUALIZADO
function analisarRepassesPorStatus(repasses) {
    const transacoesValidas = obterTransacoesValidas(repasses);
    
    // Filtrar repasses por status (apenas transações válidas)
    const repassesSucesso = transacoesValidas.filter(repass => repass.status === 'sucesso');
    const repassesFalha = transacoesValidas.filter(repass => repass.status === 'falha');
    
    console.log('=== RESUMO DOS REPASSES VÁLIDOS ===');
    console.log(`Transações válidas totais: ${transacoesValidas.length}`);
    console.log(`Transações com sucesso: ${repassesSucesso.length}`);
    console.log(`Transações com falha (válidas): ${repassesFalha.length}`);
    
    // 1. RESUMO DOS REPASSES BEM SUCEDIDOS
    console.log('\n=== RESUMO DOS REPASSES BEM SUCEDIDOS ===');
    
    // 1a. Quantidade total de repasses bem sucedidos
    const totalSucesso = repassesSucesso.length;
    console.log(`\n1a. Quantidade total de repasses bem sucedidos: ${totalSucesso}`);
    
    // 1b. Quantidade total de repasses bem sucedidos por órgão
    console.log('\n1b. Quantidade total de repasses bem sucedidos por órgão:');
    const quantidadePorOrgaoSucesso = {};
    repassesSucesso.forEach(repass => {
        quantidadePorOrgaoSucesso[repass.orgao] = (quantidadePorOrgaoSucesso[repass.orgao] || 0) + 1;
    });
    
    Object.entries(quantidadePorOrgaoSucesso).forEach(([orgao, quantidade]) => {
        console.log(`   - ${orgao}: ${quantidade} repasses`);
    });
    
    // 1c. Valor total de repasses bem sucedidos
    const valorTotalSucesso = repassesSucesso.reduce((total, repass) => total + repass.valor, 0);
    console.log(`\n1c. Valor total de repasses bem sucedidos: R$ ${valorTotalSucesso.toFixed(2)}`);
    
    // 1d. Valor total de repasses bem sucedidos por órgão
    console.log('\n1d. Valor total de repasses bem sucedidos por órgão:');
    const valorPorOrgaoSucesso = {};
    repassesSucesso.forEach(repass => {
        valorPorOrgaoSucesso[repass.orgao] = (valorPorOrgaoSucesso[repass.orgao] || 0) + repass.valor;
    });
    
    Object.entries(valorPorOrgaoSucesso).forEach(([orgao, valor]) => {
        console.log(`   - ${orgao}: R$ ${valor.toFixed(2)}`);
    });
    
    // 2. RESUMO DOS REPASSES COM FALHA VÁLIDOS
    console.log('\n\n=== RESUMO DOS REPASSES COM FALHA VÁLIDOS ===');
    
    // 2a. Quantidade total de repasses com falha válidos
    const totalFalha = repassesFalha.length;
    console.log(`\n2a. Quantidade total de repasses com falha válidos: ${totalFalha}`);
    
    // 2b. Quantidade total de repasses com falha por órgão
    console.log('\n2b. Quantidade total de repasses com falha por órgão:');
    const quantidadePorOrgaoFalha = {};
    repassesFalha.forEach(repass => {
        quantidadePorOrgaoFalha[repass.orgao] = (quantidadePorOrgaoFalha[repass.orgao] || 0) + 1;
    });
    
    Object.entries(quantidadePorOrgaoFalha).forEach(([orgao, quantidade]) => {
        console.log(`   - ${orgao}: ${quantidade} repasses`);
    });
    
    // 2c. Quantidade total de repasses com falha por motivo
    console.log('\n2c. Quantidade total de repasses com falha por motivo:');
    const quantidadePorMotivo = {};
    repassesFalha.forEach(repass => {
        quantidadePorMotivo[repass.motivo] = (quantidadePorMotivo[repass.motivo] || 0) + 1;
    });
    
    Object.entries(quantidadePorMotivo).forEach(([motivo, quantidade]) => {
        console.log(`   - ${motivo}: ${quantidade} repasses`);
    });
    
    // 2d. Valor total de repasses com falha válidos
    const valorTotalFalha = repassesFalha.reduce((total, repass) => total + repass.valor, 0);
    console.log(`\n2d. Valor total de repasses com falha válidos: R$ ${valorTotalFalha.toFixed(2)}`);
    
    // 2e. Valor total de repasses com falha por órgão
    console.log('\n2e. Valor total de repasses com falha por órgão:');
    const valorPorOrgaoFalha = {};
    repassesFalha.forEach(repass => {
        valorPorOrgaoFalha[repass.orgao] = (valorPorOrgaoFalha[repass.orgao] || 0) + repass.valor;
    });
    
    Object.entries(valorPorOrgaoFalha).forEach(([orgao, valor]) => {
        console.log(`   - ${orgao}: R$ ${valor.toFixed(2)}`);
    });
    
    // 2f. Valor total de repasses com falha por motivo
    console.log('\n2f. Valor total de repasses com falha por motivo:');
    const valorPorMotivo = {};
    repassesFalha.forEach(repass => {
        valorPorMotivo[repass.motivo] = (valorPorMotivo[repass.motivo] || 0) + repass.valor;
    });
    
    Object.entries(valorPorMotivo).forEach(([motivo, valor]) => {
        console.log(`   - ${motivo}: R$ ${valor.toFixed(2)}`);
    });
    
    // Retornar os dados para possível uso posterior
    return {
        transacoesValidas: transacoesValidas.length,
        repassesSucesso: {
            total: totalSucesso,
            porOrgao: quantidadePorOrgaoSucesso,
            valorTotal: valorTotalSucesso,
            valorPorOrgao: valorPorOrgaoSucesso
        },
        repassesFalha: {
            total: totalFalha,
            porOrgao: quantidadePorOrgaoFalha,
            porMotivo: quantidadePorMotivo,
            valorTotal: valorTotalFalha,
            valorPorOrgao: valorPorOrgaoFalha,
            valorPorMotivo: valorPorMotivo
        }
    };
}

// Análise dos repasses por critérios - ATUALIZADO
function analisarRepasses(repasses) {
    const transacoesValidas = obterTransacoesValidas(repasses);
    
    // A - Repasse com maior valor (apenas válidos)
    const maiorRepasse = transacoesValidas.reduce((max, repasse) => 
        repasse.valor > max.valor ? repasse : max
    );
    
    // B - Repasse com menor valor (apenas válidos)
    const menorRepasse = transacoesValidas.reduce((min, repasse) => 
        repasse.valor < min.valor ? repasse : min
    );
    
    // C - Dia com mais repasses (apenas válidos)
    const repassesPorDia = {};
    transacoesValidas.forEach(repasse => {
        repassesPorDia[repasse.data] = (repassesPorDia[repasse.data] || 0) + 1;
    });
    
    const diaMaisRepasses = Object.entries(repassesPorDia).reduce((max, [dia, quantidade]) => 
        quantidade > max.quantidade ? { dia, quantidade } : max
    , { dia: '', quantidade: 0 });
    
    // D - Órgão com mais repasses (apenas válidos)
    const repassesPorOrgao = {};
    transacoesValidas.forEach(repasse => {
        repassesPorOrgao[repasse.orgao] = (repassesPorOrgao[repasse.orgao] || 0) + 1;
    });
    
    const orgaoMaisRepasses = Object.entries(repassesPorOrgao).reduce((max, [orgao, quantidade]) => 
        quantidade > max.quantidade ? { orgao, quantidade } : max
    , { orgao: '', quantidade: 0 });
    
    // E - Órgão com mais repasses com sucesso (apenas válidos)
    const repassesSucessoPorOrgao = {};
    transacoesValidas.forEach(repasse => {
        if (repasse.status === 'sucesso') {
            repassesSucessoPorOrgao[repasse.orgao] = (repassesSucessoPorOrgao[repasse.orgao] || 0) + 1;
        }
    });
    
    const orgaoMaisSucesso = Object.entries(repassesSucessoPorOrgao).reduce((max, [orgao, quantidade]) => 
        quantidade > max.quantidade ? { orgao, quantidade } : max
    , { orgao: '', quantidade: 0 });
    
    // F - Órgão com mais repasses falhados válidos
    const repassesFalhaPorOrgao = {};
    transacoesValidas.forEach(repasse => {
        if (repasse.status === 'falha') {
            repassesFalhaPorOrgao[repasse.orgao] = (repassesFalhaPorOrgao[repasse.orgao] || 0) + 1;
        }
    });
    
    const orgaoMaisFalha = Object.entries(repassesFalhaPorOrgao).reduce((max, [orgao, quantidade]) => 
        quantidade > max.quantidade ? { orgao, quantidade } : max
    , { orgao: '', quantidade: 0 });
    
    // G - Motivo de falha com mais repasses (apenas válidos)
    const motivosFalha = {};
    transacoesValidas.forEach(repasse => {
        if (repasse.status === 'falha' && repasse.motivo) {
            motivosFalha[repasse.motivo] = (motivosFalha[repasse.motivo] || 0) + 1;
        }
    });
    
    const motivoMaisFalha = Object.entries(motivosFalha).reduce((max, [motivo, quantidade]) => 
        quantidade > max.quantidade ? { motivo, quantidade } : max
    , { motivo: '', quantidade: 0 });
    
    // Retornar todos os resultados
    return {
        transacoesValidas: transacoesValidas.length,
        maiorRepasse,
        menorRepasse,
        diaMaisRepasses,
        orgaoMaisRepasses,
        orgaoMaisSucesso,
        orgaoMaisFalha,
        motivoMaisFalha
    };
}

// Função para exibir estatísticas formatadas - ATUALIZADA
function exibirEstatisticas(resultados, repasses) {
    const transacoesValidas = obterTransacoesValidas(repasses);
    
    console.log("=== ESTATÍSTICAS DE REPASSES VÁLIDOS ===");
    console.log(`📊 Base de análise: ${resultados.transacoesValidas} transações válidas\n`);
    
    console.log("A. REPASSE VÁLIDO COM MAIOR VALOR:");
    console.log("   Órgão: " + resultados.maiorRepasse.orgao);
    console.log("   Data: " + resultados.maiorRepasse.data);
    console.log("   Valor: R$ " + resultados.maiorRepasse.valor.toFixed(2));
    console.log("   Status: " + resultados.maiorRepasse.status);

    console.log("\nB. REPASSE VÁLIDO COM MENOR VALOR:");
    console.log("   Órgão: " + resultados.menorRepasse.orgao);
    console.log("   Data: " + resultados.menorRepasse.data);
    console.log("   Valor: R$ " + resultados.menorRepasse.valor.toFixed(2));
    console.log("   Status: " + resultados.menorRepasse.status);

    console.log("\nC. DIA COM MAIS REPASSES VÁLIDOS:");
    console.log("   Data: " + resultados.diaMaisRepasses.dia);
    console.log("   Quantidade: " + resultados.diaMaisRepasses.quantidade + " repasses válidos");

    console.log("\nD. ÓRGÃO COM MAIS REPASSES VÁLIDOS:");
    console.log("   Órgão: " + resultados.orgaoMaisRepasses.orgao);
    console.log("   Quantidade: " + resultados.orgaoMaisRepasses.quantidade + " repasses válidos");

    console.log("\nE. ÓRGÃO COM MAIS REPASSES VÁLIDOS COM SUCESSO:");
    console.log("   Órgão: " + resultados.orgaoMaisSucesso.orgao);
    console.log("   Quantidade: " + resultados.orgaoMaisSucesso.quantidade + " repasses válidos");

    console.log("\nF. ÓRGÃO COM MAIS REPASSES VÁLIDOS COM FALHA:");
    console.log("   Órgão: " + resultados.orgaoMaisFalha.orgao);
    console.log("   Quantidade: " + resultados.orgaoMaisFalha.quantidade + " repasses válidos");

    console.log("\nG. MOTIVO DE FALHA VÁLIDO MAIS FREQUENTE:");
    console.log("   Motivo: " + resultados.motivoMaisFalha.motivo);
    console.log("   Quantidade: " + resultados.motivoMaisFalha.quantidade + " ocorrências válidas");

    // Estatísticas adicionais
    console.log("\n=== ESTATÍSTICAS ADICIONAIS (VÁLIDAS) ===");
    const totalRepassesValidos = transacoesValidas.length;
    const repassesSucesso = transacoesValidas.filter(r => r.status === 'sucesso').length;
    const repassesFalha = transacoesValidas.filter(r => r.status === 'falha').length;

    console.log("Total de repasses válidos: " + totalRepassesValidos);
    console.log("Repasses válidos com sucesso: " + repassesSucesso + " (" + ((repassesSucesso/totalRepassesValidos)*100).toFixed(1) + "%)");
    console.log("Repasses válidos com falha: " + repassesFalha + " (" + ((repassesFalha/totalRepassesValidos)*100).toFixed(1) + "%)");
    
    // Comparação com dados originais
    const transacoesInvalidas = identificarTransacoesInvalidas(repasses);
    console.log("\n=== COMPARAÇÃO COM DADOS ORIGINAIS ===");
    console.log(`Total original: ${repasses.length} transações`);
    console.log(`Transações inválidas removidas: ${transacoesInvalidas.length}`);
    console.log(`Base de análise final: ${totalRepassesValidos} transações válidas`);
}

// Função para analisar transações de um órgão específico - ATUALIZADA
function analisarTransacoesPorOrgao(repasses, orgaoAlvo) {
    const transacoesValidas = obterTransacoesValidas(repasses);
    
    console.log(`=== ANÁLISE DETALHADA DE TRANSAÇÕES VÁLIDAS - ${orgaoAlvo.toUpperCase()} ===`);
    console.log('==========================================================\n');
    
    // Critério a: Identificar automaticamente transações válidas do órgão responsável
    const transacoesOrgao = transacoesValidas.filter(repasse => 
        repasse.orgao.toLowerCase() === orgaoAlvo.toLowerCase()
    );
    
    if (transacoesOrgao.length === 0) {
        console.log(`❌ Nenhuma transação válida encontrada para o órgão: ${orgaoAlvo}`);
        return;
    }
    
    // Critério b: Exibir resultados de forma organizada
    console.log(`📊 RESUMO GERAL - ${orgaoAlvo.toUpperCase()} (TRANSAÇÕES VÁLIDAS)`);
    console.log('----------------------------------------------');
    console.log(`Total de transações válidas encontradas: ${transacoesOrgao.length}`);
    
    // Estatísticas por status
    const transacoesSucesso = transacoesOrgao.filter(t => t.status === 'sucesso');
    const transacoesFalha = transacoesOrgao.filter(t => t.status === 'falha');
    
    console.log(`✅ Transações válidas com sucesso: ${transacoesSucesso.length}`);
    console.log(`❌ Transações válidas com falha: ${transacoesFalha.length}`);
    
    // Valores totais
    const valorTotal = transacoesOrgao.reduce((sum, t) => sum + t.valor, 0);
    const valorSucesso = transacoesSucesso.reduce((sum, t) => sum + t.valor, 0);
    const valorFalha = transacoesFalha.reduce((sum, t) => sum + t.valor, 0);
    
    console.log(`💰 Valor total envolvido (válidos): R$ ${valorTotal.toFixed(2)}`);
    console.log(`💸 Valor em transações válidas bem-sucedidas: R$ ${valorSucesso.toFixed(2)}`);
    console.log(`🚫 Valor em transações válidas com falha: R$ ${valorFalha.toFixed(2)}`);
    
    // Detalhamento das transações válidas
    console.log('\n📋 DETALHAMENTO DAS TRANSAÇÕES VÁLIDAS');
    console.log('----------------------------------------------');
    
    transacoesOrgao.forEach((transacao, index) => {
        console.log(`\n${index + 1}. TRANSAÇÃO VÁLIDA ${index + 1}:`);
        console.log(`   Órgão: ${transacao.orgao}`);
        console.log(`   Data: ${transacao.data}`);
        console.log(`   Valor: R$ ${transacao.valor.toFixed(2)}`);
        console.log(`   Status: ${transacao.status === 'sucesso' ? '✅ SUCESSO' : '❌ FALHA'}`);
        
        if (transacao.status === 'falha' && transacao.motivo) {
            console.log(`   Motivo da falha: ${transacao.motivo}`);
        }
    });
    
    // Análise de motivos de falha válidos (se houver)
    if (transacoesFalha.length > 0) {
        console.log('\n🔍 ANÁLISE DE FALHAS VÁLIDAS');
        console.log('----------------------------------------------');
        
        const motivosFalha = {};
        transacoesFalha.forEach(transacao => {
            motivosFalha[transacao.motivo] = (motivosFalha[transacao.motivo] || 0) + 1;
        });
        
        Object.entries(motivosFalha).forEach(([motivo, quantidade]) => {
            console.log(`   • ${motivo}: ${quantidade} ocorrência(s) válida(s)`);
        });
    }
    
    // Análise temporal
    console.log('\n📅 DISTRIBUIÇÃO TEMPORAL (VÁLIDAS)');
    console.log('----------------------------------------------');
    
    const transacoesPorData = {};
    transacoesOrgao.forEach(transacao => {
        transacoesPorData[transacao.data] = (transacoesPorData[transacao.data] || 0) + 1;
    });
    
    Object.entries(transacoesPorData)
        .sort((a, b) => new Date(a[0].split('/').reverse().join('-')) - new Date(b[0].split('/').reverse().join('-')))
        .forEach(([data, quantidade]) => {
            console.log(`   ${data}: ${quantidade} transação(ões) válida(s)`);
        });
    
    return {
        orgao: orgaoAlvo,
        totalTransacoes: transacoesOrgao.length,
        transacoesSucesso: transacoesSucesso.length,
        transacoesFalha: transacoesFalha.length,
        valorTotal: valorTotal,
        valorSucesso: valorSucesso,
        valorFalha: valorFalha,
        transacoes: transacoesOrgao,
        motivosFalha: transacoesFalha.reduce((acc, t) => {
            acc[t.motivo] = (acc[t.motivo] || 0) + 1;
            return acc;
        }, {})
    };
}

// ========== EXECUÇÃO PRINCIPAL ATUALIZADA ==========

console.log('ANÁLISE COMPLETA DE REPASSES GOVERNAMENTAIS - COM FILTRO DE VALIDAÇÃO');
console.log('=====================================================================\n');

// Identificar transações inválidas primeiro
console.log('🔍 VERIFICAÇÃO INICIAL DE QUALIDADE DOS DADOS');
console.log('=============================================\n');
const transacoesInvalidas = identificarTransacoesInvalidas(objetoRepasses);

// 1. Total de repasses válidos
console.log("\n" + "=".repeat(50));
console.log(contarTotalRepasses(objetoRepasses));
console.log("\n");

// 2. Análise por status (apenas válidos)
console.log('ANÁLISE DE TRANSAÇÕES VÁLIDAS POR STATUS');
console.log('=========================================\n');
const analiseStatus = analisarRepassesPorStatus(objetoRepasses);

// 3. Análise por critérios (apenas válidos)
console.log('\n\n');
const resultados = analisarRepasses(objetoRepasses);
exibirEstatisticas(resultados, objetoRepasses);

// 4. Análise por órgão específico (apenas válidos)
console.log('\n\n');
const ORGAO_ANALISAR = "Polícia Civil";
console.log('ANÁLISE DE TRANSAÇÕES VÁLIDAS POR ÓRGÃO ESPECÍFICO');
console.log('==================================================\n');
const resultadoAnalise = analisarTransacoesPorOrgao(objetoRepasses, ORGAO_ANALISAR);

// ========== RELATÓRIO FINAL - HISTÓRIA DE USUÁRIO 6 ==========
console.log("\n" + "=".repeat(70));
console.log(" RELATÓRIO FINAL - HISTÓRIA DE USUÁRIO 6: AJUSTES NAS ESTATÍSTICAS");
console.log("=".repeat(70));

console.log("\n IMPACTO DA IMPLEMENTAÇÃO:");
console.log(`   - Transações totais originais: ${objetoRepasses.length}`);
console.log(`   - Transações inválidas identificadas: ${transacoesInvalidas.length}`);
console.log(`   - Transações válidas para análise: ${obterTransacoesValidas(objetoRepasses).length}`);
console.log(`   - Redução na base de análise: ${((transacoesInvalidas.length/objetoRepasses.length)*100).toFixed(1)}%`);

console.log("\n ESTATÍSTICAS AFETADAS:");
console.log("   - Total de repasses processados");
console.log("   - Análise por status (sucesso/falha)");
console.log("   - Repasses com maior/menor valor");
console.log("   - Dia com mais repasses");
console.log("   - Órgão com mais repasses");
console.log("   - Análise por órgão específico");
console.log("   - Todos os cálculos de valores e quantidades");

console.log("\n RESULTADO: Todas as estatísticas agora refletem apenas dados válidos e confiáveis!");